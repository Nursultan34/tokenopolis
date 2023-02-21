import { Handlers, PageProps } from "$fresh/server.ts";
import LogInForm from "@/islands/LogInForm.tsx";
import { verifyPassword } from "#/db.ts";
import { genJWT } from "#/auth.ts";
import { redirectToC } from "#/utils.ts";

interface FormData {
	isIncorrect: boolean;
}

interface LoginData {
	email: string;
	password: string;
}

export const handler: Handlers<FormData | LoginData> = {
	// If there's a ?incorrect url parameter, render
	// the page with an incorrect password warning
	GET(req, ctx) {
		// Extracts the "incorrect" url parameter
		const url = new URL(req.url);
		const isIncorrect = url.searchParams.get("incorrect") != null;
		// And passes it to the component
		return ctx.render({ isIncorrect });
	},
	async POST(req, ctx) {
		const data = await req.formData();
		const email = data.get("email");
		const password = data.get("password");
		if (!(typeof email == "string" && typeof password == "string")) return new Response("Error");
		// If the password is correct
		if (await verifyPassword(email, password)) {
			// Create the JWT
			const jwt = await genJWT(email);
			// And send it together with redirecting to the dashboard
			return redirectToC("/dashboard", `auth=${jwt}; max-age=31536000`);
		} else {
			return Response.redirect(`${new URL(req.url).origin}/login?incorrect`);
		}
	},
};

export default function LogIn(data: PageProps<FormData>) {
	return <LogInForm isIncorrect={data.data.isIncorrect} />;
}
