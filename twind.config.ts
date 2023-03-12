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
		"gridStyle": css`grid-column-start: 1; grid-column-end: 3; grid-auto-rows: 50px`,
	},
	content: [
		"./component/**/*.{js,jsx,ts,tsx}",
		"./islands/**/*.{js,jsx,ts,tsx}",
		"./lib/**/*.{js,jsx,ts,tsx}",
		"./routes/**/*.{js,jsx,ts,tsx}",
	],
	theme: {
		colors: {
			white: {
				light: "#FFFF",
				dark: "#FCFCFC",
			},
			black: "#000000",
			gray: {
				main: "#F0F0F0",
				light: "#F6F6F6",
				cool: "#D1D1D1",
				card: "#EEEEEE",
				dark: "#656565",
				dashed: "#B8B8B7",
			},
			dark: {
				light: "#2B2B2C",
				dark: "#1B1B1C",
				midnight: "#202121",
			},
			yellow: {
				main: "#F4C500",
				light: "#FFE661",
				dark: "#FFB800",
				orange: "#FFD600",
			},
			violet: "#4e3678",
			green: {
				light: "#78D72E",
				yellow: "#0AB85A",
				dark: "#00986B",
			},
			red: {
				light: "#DC1A09",
				dark: "#C11D0F",
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
			boxShadow: {
				side: "inset -1px 0px 3px 0px rgba(0, 0, 0, 0.30);",
				"menu-button": "1px 1px 10px 0px rgba(0, 0, 0, 0.20)",
				"header": "0px 2px 6px 0px rgba(0,0,0,0.20)",
			},
		},
	},
	preflight: {
		body: apply`dark:bg-black min-h-screen text-black dark:text-white`,
		"@import": "url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap')",
	},
} as Options;
