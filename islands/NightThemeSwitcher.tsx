import { useEffect, useState } from "preact/hooks";

export default function NightThemeSwitcher() {
	const [theme, setTheme] = useState(localStorage.getItem("theme") as "dark" | "light" || "dark");
	useEffect(() => setHtmlDark(theme == "dark"));
	return (
		<div
			class="w-24 text-xs font-light"
			onClick={(_) => {
				const newTheme = ifDark(theme, "light", "dark");
				setTheme(newTheme);
				localStorage.setItem("theme", newTheme);
				setHtmlDark(theme == "dark");
			}}
		>
			{ifDark(theme, "НОЧНАЯ", "ДНЕВНАЯ") + " ТЕМА"}
			<div class="mt-1 ml-2 w-16 h-6 bg-gray-300 rounded-full">
				<div class={"w-10 h-6 bg-yellow rounded-full relative" + (ifDark(theme, " left-6", ""))}>
				</div>
			</div>
		</div>
	);
}

function ifDark<T>(theme: "dark" | "light", then: T, else_: T) {
	if (theme == "dark") return then;
	else return else_;
}

function setHtmlDark(dark: boolean) {
	if (dark) {
		document.getElementsByTagName("html")[0].classList.add("dark");
	} else {
		document.getElementsByTagName("html")[0].classList.remove("dark");
	}
}
