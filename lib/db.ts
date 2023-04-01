// Database operations

// import { connect } from "https://deno.land/x/redis@v0.29.1/mod.ts";
import * as bcrypt from "https://deno.land/x/bcrypt@v0.4.1/mod.ts";
import { const_ } from "#/utils.ts";
// import { Keypair } from "#/stellar.ts";

const gq = (q: string) =>
	fetch("http://185.182.111.64:5000/graphql", {
		method: "POST",
		headers: {'Content-Type': 'application/json'},
		body: JSON.stringify({ query: q }),
	}).then(res => res.json());

const extractEdges = key => res => res.data[key].edges.map(e => e.node);

// const redis = await connect({
// 	username: "default",
// 	password: "zYDsmdvlqBLDCEQUAQIiYjIRLuiuA0Sk",
// 	hostname: "redis-11947.c1.asia-northeast1-1.gce.cloud.redislabs.com",
// 	port: 11947,
// });

export async function addUserToDB({ email, name, passHash, wallet }): Promise<[]> {
	if (await getUser(email) == undefined) {
		console.log(await gq(`mutation CreateUser{createUser(input:{user:{email:"${email}"name:"${name}"password:"${passHash}"wallet:"${wallet}"}}){user{email}}}`));
		return Promise.resolve([]);
	} else {
		return Promise.reject();
	}
}

// Returns a tuple of user's name, password hash and wallet secret key
export const getUser = (email: string): Promise<Record<string, unknown> | undefined> =>
	gq(`query GetUser{users(condition:{email:"${email}"}){edges{node{password birthDate email isAdmin name nick phone wallet}}}}`)
		.then(extractEdges("users"))
		// .then(a => { console.log(a); return a; })
		.then(l => l[0])
		.catch(const_(undefined))

export const getObjects = () =>
	gq(`query RelevantObjects{objects{edges{node{id name tokenName tokenPrice location investersAmount}}}}`)
		.then(extractEdges("objects"))
		.catch(const_(undefined))

export const getObject = id =>
	gq(`query Object{objects(condition:{id: ${id}}){edges{node{id name tokenName tokenPrice location investersAmount area buildBegins buildEnds description objectPrice}}}}`)
		.then(extractEdges("objects"))
        .then($ => $[0])
        .catch(const_(undefined))

// User exists, password is correct => true
// User exists, password is incorrect => false
// User doesn't exist => undefined
export async function verifyPassword(email: string, password: string): Promise<boolean | undefined> {
	const password_hash =
		(await gq(`query GetUser{users(condition:{email:"${email}"}){edges{node{password}}}}`).then(extractEdges))[0]?.password;
	return (password_hash == undefined)
		? undefined
		: bcrypt.compare(password, password_hash);
}
