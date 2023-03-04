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
		"login-input": apply`my-2 px-7 py-5 w-full bg-white dark:bg-black border border-black dark:border-white rounded-md placeholder::(text-black dark:text-white text-xs)`,
		"login-header": apply`lg:absolute w-full h-24 row justify-between children:(row items-center)`,
		"login-form": apply`col lg:h-full px-9 lg:(pl-72 pr-16) justify-center lg:w-1/2`,
		"login-submit": apply`bg-yellow py-3 w-full lg:w-3/4 my-5 rounded-md text-xl`,
		"lk-input": apply`p-5 bg-white dark:bg-slate-2 rounded-sm placeholder::text-gray-600`,
		"bg-none": css({ backgroundImage: "none" }),
	},
	content: [
		"./component/**/*.{js,jsx,ts,tsx}",
		"./islands/**/*.{js,jsx,ts,tsx}",
		"./lib/**/*.{js,jsx,ts,tsx}",
		"./routes/**/*.{js,jsx,ts,tsx}",
	],
	theme: {
		colors: {
			yellow: {
				main: "#F4C500",
				light: "#FFE661",
				btn: "#FFD600",
			},
			white: "#FFFFFF",
			gray: {
				white: "#F6F6F6",
				bg: "#D1D1D1",
				card: "#EEEEEE",
				switcher: "#A09696",
				main: "#656565",
				dashed: "#B8B8B7",
				fon: "#F6F6F6",
			},
			dark: {
				1: "#2B2B2C",
				2: "#1B1B1C",
				3: "#202121",
			},
			slate: {
				1: "#1D2024",
				2: "#2A2B31",
			},
			black: "#000000",
			darkGray: "#202121",
			green: {
				1: "#78D72E",
				2: "#0AB85A",
				btn: "#00986B",
			},
			red: {
				1: "#DC1A09",
				2: "#C11D0F",
			},
			brown: "#A98232",
			mustard: "#D48E00",
			blue: {
				btn: "#0094E0",
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
		extend: {
			keyframes: {
				"shadow-pulse": {
					from: { "filter": "drop-shadow(0px 0px 4px rgba(219, 168, 1, 0.8))" },
					to: { "filter": "drop-shadow(0px 0px 1rem rgba(219, 168, 1, 0.8))" },
				},
			},
			animation: {
				"shadow-pulse": "shadow-pulse 3s linear infinite alternate",
			},
		},
	},
	preflight: {
		body: apply`dark:bg-black min-h-screen text-black dark:text-white`,
		"@import": "url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap')",
	},
} as Options;
