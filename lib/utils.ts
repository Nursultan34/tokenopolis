// Returns a Response that redirects to `path`
export function redirectTo(path: string): Response {
	return new Response("", {
		status: 302,
		headers: { Location: path },
	});
}

// Like `redirectTo`, but also sends a cookie when redirecting
export function redirectToC(path: string, cookie: string): Response {
	return new Response("", {
		status: 302,
		headers: { Location: path, "Set-Cookie": cookie },
	});
}

export function bindInput(value: string, setValue: (newVal: string) => void) {
	return { value, onInput: (e) => setValue(e.target?.value) };
}
