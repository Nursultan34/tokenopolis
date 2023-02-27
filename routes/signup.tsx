import { Handlers }		from "$fresh/server.ts";
import SignUpForm		from "@/islands/SignUpForm.tsx";
import * as stellar		from "#/stellar.ts";
import { addUserToDB, User } from "#/db.ts";
import { genJWT }		from "#/auth.ts";
import { redirectToC, mayFail, assertStr } from "#/utils.ts";
import { isEmail }		from "https://deno.land/x/isemail@v1.0.1/mod.ts";
import * as bcrypt		from "https://deno.land/x/bcrypt@v0.4.1/mod.ts";

// Adds the user to the database and returns the JWT token for his authentication
async function register(email: string, name: string, password: string): Promise<string> {
	const passHash = await bcrypt.hash(password);
	// Generate a Stellar wallet
	const keypair = stellar.randomKeypair();
	const secretKey = keypair.secret();
	// Add user to the database
	await addUserToDB({
		email,
		name,
		passHash,
		wallet: keypair
	});
	return genJWT(email);
}

function isCorrectPassword(password: string): boolean {
	return password.length >= 8 && password.length < 72;
}

export const handler: Handlers = {
	GET(_req, ctx) {
		return ctx.render();
	},
	POST: mayFail(async (req, _ctx) => {
		const data = await req.formData();
		const email = assertStr(data.get("email"));
		const name = assertStr(data.get("name"));
		const password = assertStr(data.get("password"));
		// If the credentials are okay
		if (!(isEmail(email) && isCorrectPassword(password) && (name.length < 40))) { throw new Error() }
		// Build the redirect response that will also set the authentication cookie
		const jwt = await register(email, name, password);
		return redirectToC("/dashboard", `auth=${jwt}; max-age=31536000`);
	}),
};

export default function SignUp() {
	return <SignUpForm />;
}
