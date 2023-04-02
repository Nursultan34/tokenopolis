import { Options } from "$fresh/plugins/twind.ts";
import { apply } from "twind";
import { css } from "twind/css";
/** @type {import('twind').Configuration} */

export default {
	selfURL: import.meta.url,
	darkMode: "class",
	plugins: {
		// Base classes
		"row":		apply`flex flex-row`,
		"col":		apply`flex flex-col`,
		"center":	apply`flex justify-center items-center`,
		"bg-none":				css({ backgroundImage: "none" }),
		"aspect-square":		css`aspect-ratio: 1 / 1;`,
		"flex-basis-1/2":		css`flex-basis: calc(50% - 1.25rem);`,
		"flex-basis-1/3":		css`flex-basis: calc(33% - 1.25rem);`,
		"flex-basis-full":		css`flex-basis: 100%;`,
		"flex-basis-fit":		css`flex-basis: fit-content;`,
		"ignore-clicks":		css`pointerEvents: none;`,
		"transition-height":	css`transition: max-height 1s`,
		// FIXME
		"gridStyle": css`grid-column-start: 1; grid-column-end: 3; grid-auto-rows: 50px`,
		// Login elements
		"login-main":	apply`w-full lg:row h-screen bg(login-bg cover dark:none)`,
		"login-h1":		apply`text-3xl lg:text-4xl font-light w-full lg:mb-14 mt-6 lg:mt-0`,
		"login-input":	apply`my-2 px-7 py-5 w-full bg-white dark:bg-black border border-black dark:border-white rounded-md placeholder::(text-black dark:text-white text-xs)`,
		"login-header": apply`lg:absolute w-full h-24 row justify-between children:(row items-center)`,
		"login-form":	apply`col lg:h-full px-9 lg:(pl-72 pr-16) justify-center lg:w-1/2`,
		"login-submit": apply`bg-yellow py-3 w-full lg:w-3/4 my-5 rounded-md text-xl`,
		// Dashboard types
		"lk-input":			apply`p-5 bg-white dark:bg-slate-2 rounded-sm placeholder::text-gray-600`,
		"header":			apply`row w-full h-24 bg-white-dark shadow-header z-20`,
		"profile-selin":	apply`pl-4 bg-gray-back rounded-sm text-dark-midnight text-lg`,
		"scrollbar": css`
			&::-webkit-scrollbar { width: 10px; };
			&::-webkit-scrollbar-track { background-color: #FCFCFC; border: 1px solid #B8B8B7; border-radius: 2px; };
			&::-webkit-scrollbar-thumb { background-color: #FFD600; border: 1px solid #B8B8B7; border-radius: 2px; }
		`,
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
				back: "#E5E5E5",
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
				brown: "#A87700",
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
			"xl": "1900px",
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
		// body: apply`dark:bg-black min-h-screen text-black dark:text-white`,
		button: apply`focus:outline-none bg-[rgba(0, 0, 0, 0)]`,
		"@import": "url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap')",
	},
} as Options;
