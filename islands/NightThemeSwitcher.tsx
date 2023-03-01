import { useEffect, useReducer } from "preact/hooks";

export default function NightThemeSwitcher() {
	const [isDark, toggleTheme] = useReducer(
		(dark: boolean, _) => {
			const newTheme = !dark;
			localStorage.setItem("dark", newTheme.toString());
			setHtmlDark(newTheme);
			return newTheme;
		},
		// Set to "true" to make the light theme the default (also delete _app.tsx to make it faster)
		localStorage.getItem("dark") != "false",
	);

	useEffect(() => setHtmlDark(isDark), []);

	return (
		<div class="w-26 text-xs font-light" onClick={(_) => toggleTheme([])}>
			{isDark ? "НОЧНАЯ " : "ДНЕВНАЯ "}ТЕМА
			<div class="mt-1 ml-2 w-16 h-6 rounded-full bg-gray-switcher">
				<div class={"w-10 h-6 bg-yellow rounded-full relative" + (isDark ? " left-6" : "")}>
				</div>
			</div>
		</div>
	);
}

function setHtmlDark(dark: boolean) {
	if (dark) {
		document.getElementsByTagName("html")[0].classList.add("dark");
	} else {
		document.getElementsByTagName("html")[0].classList.remove("dark");
	}
}
