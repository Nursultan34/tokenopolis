// This module includes functions for generating and checking JWTs
// JWT tokens are stored in the user's cookies and only the server
// can create them. They also contain the user's email. They are
// created and verified with a secret key which is stored in
// jwtkey.json file. Creation, serialization and deserealization
// are described in the #/jwtkey.ts file

import { JWTKey } from "#/jwtkey.ts";
import * as djwt from "https://deno.land/x/djwt@v2.8/mod.ts";

// Takes a email and generates a JWT with the key
export function genJWT(email: string): Promise<string> {
	return djwt.create({ alg: "HS512", typ: "JWT" }, {
		email: email,
	}, JWTKey);
}

// Takes the user's cookie list and if the JWT cookie exists
// and is valid - returns user's e-mail adress, otherwise undefined
export async function checkCookieAuth(cookies: Record<string, string>): Promise<string | undefined> {
	if (cookies.auth) {
		const payload = await djwt.verify(cookies.auth, JWTKey)
			.catch((_e) => undefined) as { email: string } | undefined;
		// TODO: check if the account exists (the cookie may stay after the user deleted the account)
		return payload?.email;
	} else return undefined;
}
