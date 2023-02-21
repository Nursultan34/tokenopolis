import { Options } from "$fresh/plugins/twind.ts";
import { apply } from "twind";
import { css } from "twind/css";
/** @type {import('twind').Configuration} */

export default {
	selfURL: import.meta.url,
	darkMode: "class",
	plugins: {
		"row": apply`flex flex-row`,
		"col": apply`flex flex-col`,
		"login-main": apply`w-full lg:row h-screen bg(login-bg cover dark:none)`,
		"login-h1": apply`text-3xl lg:text-4xl font-light w-full lg:mb-14 mt-6 lg:mt-0`,
		"login-input":
			apply`my-2 px-7 py-5 w-full bg-white-900 dark:bg-dark-900 border border-black dark:border-white-900 rounded-md placeholder::(text-black dark:text-white-900 text-xs)`,
		"login-header": apply`lg:absolute w-full h-24 row justify-between children:(row items-center)`,
		"login-form": apply`col lg:h-full px-9 lg:(pl-72 pr-16) justify-center lg:w-1/2`,
		"login-submit": apply`bg-yellow py-3 w-full lg:w-3/4 my-5 rounded-md text-xl`,
		"lk-input": apply`p-5 bg-dark-700 rounded-sm placeholder::text-gray-600`,
		"bg-none": css({ backgroundImage: "none" }),
	},
	theme: {
		colors: {
			yellow: "#F4C500",
			black: "#000000",
			dark: {
				900: "#18191D",
				800: "#1d2024",
				750: "#1e1f24",
				700: "#2a2b31",
			},
			red: {
				500: "#A13D2F",
			},
			white: {
				900: "#FFFFFF",
				800: "#42434B",
			},
			gray: {
				700: "#A7A4A8",
				650: "#606166",
				600: "#42434b",
				500: "#323235",
				450: "#6A6666",
				400: "#ACAAAD",
				300: "#A09696",
			},
		},
		screens: {
			"lg": "1300px",
		},
		fontFamily: {
			sans: "Roboto, sans-serif",
		},
		backgroundImage: {
			"login-bg": "url('/light-bg.png')",
		},
	},
	preflight: {
		body: apply`dark:bg-dark-900 bg-white-900 min-h-screen text-black dark:text-white-900`,
		"@import": "url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap')",
	},
} as Options;
