import { Handlers } from "$fresh/server.ts";
import SignUpForm from "@/islands/SignUpForm.tsx";
import * as bcrypt from "https://deno.land/x/bcrypt@v0.4.1/mod.ts";
import * as stellar from "#/stellar.ts";
import { addUser } from "#/db.ts";
import { isEmail } from "https://deno.land/x/isemail@v1.0.1/mod.ts";
import { genJWT } from "#/auth.ts";
import { redirectToC } from "#/utils.ts";

// Adds the user to the database and returns the JWT token for his authentication
async function register(email: string, name: string, password: string): Promise<string> {
	const passHash = await bcrypt.hash(password);
	// Generate a Stellar wallet
	const secretKey = stellar.randomKeypair().secret();
	// Add user to the database
	await addUser(email, name, passHash, secretKey);
	return genJWT(email);
}

function isCorrectPassword(password: string): boolean {
	return password.length >= 8 && password.length < 72;
}

export const handler: Handlers = {
	GET(_req, ctx) {
		return ctx.render();
	},
	async POST(req, _ctx) {
		const data = await req.formData();
		const email = data.get("email");
		const name = data.get("name");
		const password = data.get("password");
		if (!(typeof email == "string" && typeof password == "string" && typeof name == "string")) {
			return new Response("Error");
		}
		// If the credentials are okay
		if (isEmail(email) && isCorrectPassword(password) && (name.length < 40)) {
			// Build the redirect response that will also set the authentication cookie
			const jwt = await register(email, name, password);
			return redirectToC("/dashboard", `auth=${jwt}; max-age=31536000`);
		} else {
			return new Response("Error");
		}
	},
};

export default function SignUp() {
	return <SignUpForm />;
}
