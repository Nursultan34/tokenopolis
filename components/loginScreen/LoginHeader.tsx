import { asset } from "$fresh/runtime.ts";
import NightThemeSwitcher from "@/islands/NightThemeSwitcher.tsx";

export default function LoginHeader() {
	return (
		<div class="login-header">
			<div class="items-center px-7 lg:px-20 row">
				<img class="mr-5 h-14" src={asset("/logo-yellow.svg")} />
				<h1 class="font-light text-2lg">ТОКЕНОПОЛИС</h1>
				<span class="hidden mx-3 ml-8 text-xs lg:block">En</span>
				<span class="hidden mx-3 text-xs lg:block">Рус</span>
			</div>
			<div class="items-center px-12 row">
				<NightThemeSwitcher />
			</div>
		</div>
	);
}
