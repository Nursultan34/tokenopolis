// This module includes functions for generating and checking JWTs
// JWT tokens are stored in the user's cookies and only the server
// can create them. They also contain the user's email. They are
// created and verified with a secret key which is stored in
// jwtkey.json file. Creation, serialization and deserealization
// are described in the #/jwtkey.ts file

import { JWTKey } from "#/jwtkey.ts";
import * as djwt from "https://deno.land/x/djwt@v2.8/mod.ts";
import * as F from "https://deno.land/x/fae@v1.0.0/mod.ts";
import { const_ } from "#/utils.ts";

// Convers T | undefined to a Promise (fails if undefined)
const promiseFromMaybe = <T>(val: T | undefined): Promise<T> => val == undefined ? Promise.reject() : Promise.resolve(val);
// If `v` matches the predicate `p`, return a Promise of v, fail otherwise
const assert = (p) => (v) => p(v) ? Promise.resolve(v) : Promise.reject();

// Takes a email and generates a JWT with the key
export function genJWT(email: string): Promise<string> {
	return djwt.create({ alg: "HS512", typ: "JWT" }, {
		email: email,
	}, JWTKey);
}

// Takes the user's cookie list and if the JWT cookie exists
// and is valid - returns user's e-mail adress, otherwise undefined
export function checkCookieAuth(cookies: Record<string, string>): Promise<string | undefined> {
	return promiseFromMaybe(cookies.auth)
		.then(jwt => djwt.verify(jwt, JWTKey))
		.then(assert(F.propIs("String", "email")))
		.then(payload => payload.email as string)
		.catch(const_(undefined));
	// TODO: check if the account exists (the cookie may stay after the user deleted the account)
}

export async function assertLoggedIn(cookies: Record<string, string>): Promise<string> {
	const email = await checkCookieAuth(cookies)
	if (email == undefined) throw new Error("Not logged in");
	return email;
}
