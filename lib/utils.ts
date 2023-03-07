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

import { Handler, HandlerContext } from "$fresh/server.ts";

export function mayFail(fn: Handler): Handler {
	return (req: Request, ctx: HandlerContext) =>
		// A trick to use Promise error handlers instead of try/catch
		Promise.resolve(fn)
			.then((fn) => fn(req, ctx))
			.catch(const_(new Response("Error")));
}

export function assertType(type_: string, val: unknown) {
	if (typeof val != type_) throw new Error("Type assertion failed");
	else return val;
}

export const assertStr = (val: unknown): string => assertType("string", val) as string;

export const bindInput = (value: string, setValue: (newVal: string) => void) => ({
	value,
	onInput: (e: Event) => setValue((e.target as HTMLInputElement).value),
});

import { useReducer } from "preact/hooks";
export const boolState = () => useReducer((b) => !b, false);

export const const_ = <T>(v: T) => (..._: unknown[]) => v;
export const valuesMatch = (target: Record<string, any>) => (value: Record<string, any>) => Object.keys(value).map((key) => value[key] == target[key]).reduce((a, b) => a && b);
export const split = (delimiter: string) => (input: string) => input.split(delimiter);
