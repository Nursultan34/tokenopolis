import { useEffect, useState } from "preact/hooks";

export default function NightThemeSwitcher() {
	const [theme, setTheme] = useState(localStorage.getItem("theme") as "dark" | "light" || "dark");
	useEffect(() => setHtmlDark(theme == "dark"));
	return (
		<div
			class="font-light text-xs w-24"
			onClick={(_) => {
				const newTheme = ifDark(theme, "light", "dark");
				setTheme(newTheme);
				localStorage.setItem("theme", newTheme);
				setHtmlDark(theme == "dark");
			}}
		>
			{ifDark(theme, "НОЧНАЯ", "ДНЕВНАЯ") + " ТЕМА"}
			<div class="w-16 h-6 bg-gray-300 rounded-full mt-1 ml-2">
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
