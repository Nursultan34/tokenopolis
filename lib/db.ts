// Database operations

import { connect } from "https://deno.land/x/redis@v0.29.1/mod.ts";
import * as bcrypt from "https://deno.land/x/bcrypt@v0.4.1/mod.ts";
import { const_, split } from "#/utils.ts";

const redis = await connect({
	username: "default",
	password: "zYDsmdvlqBLDCEQUAQIiYjIRLuiuA0Sk",
	hostname: "redis-11947.c1.asia-northeast1-1.gce.cloud.redislabs.com",
	port: 11947,
});

// Returns true if the user was successfully
// added, false if the user already exists
export async function addUserToDB(email: string, name: string, hashedPassword: string, secretKey: string): Promise<[]> {
	if (await redis.exists(email) == 0) {
		await redis.set(email, [name, hashedPassword, secretKey].join(","));
		return Promise.resolve([]);
	} else {
		return Promise.reject();
	}
}

// TODO: Create a structure with user's data

// Returns a tuple of user's name, password hash and wallet secret key
export const getUser = (email: string): Promise<[string, string, string] | undefined> =>
	redis.get(email).then(split(",")).catch(const_(undefined)) as Promise<[string, string, string] | undefined>;

// User exists, password is correct => true
// User exists, password is incorrect => false
// User doesn't exist => undefined
export async function verifyPassword(email: string, password: string): Promise<boolean | undefined> {
	const record = await redis.get(email);
	if (record) {
		return bcrypt.compare(password, record.split(",")[1]);
	} else {
		return undefined;
	}
}
