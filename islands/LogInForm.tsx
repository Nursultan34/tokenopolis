import { asset }	from "$fresh/runtime.ts";
import LoginHeader	from "@/components/LoginHeader.tsx";
import LoginFooter	from "@/components/LoginFooter.tsx";
import { useState } from "preact/hooks";

export default function LogInForm({ isIncorrect }: { isIncorrect: boolean }) {
	const [showPass, setShowPass] = useState(false);
	return (
		<main class="login-main">
			<LoginHeader />
			<form class="login-form" method="POST">
				<h1 class="login-h1">Вход</h1>
				<hr class="relative right-9 my-8 w-16 h-1 bg-white lg:hidden" />
				<p class="pr-5 mb-12 text-xs leading-6 lg:hidden">Удобный инструмент для инвестиций в недвижимость с помощью технологических технологий</p>
				<input required class="login-input" name="email" type="email" placeholder="ЭЛЕКТРОННАЯ ПОЧТА" />
				<input required class="login-input" name="password" type={showPass ? "text" : "password"} placeholder="ПАРОЛЬ" />
				{isIncorrect ? <p class="text-red-500">Неправильный E-mail или пароль!</p> : <></>}
				<button type="submit" class="login-submit">ВОЙТИ</button>
				<br />
				<a href="/signup" class="m-0! p-2! hover:text-gray-600 text-xs">
					Нет аккаунта? Зарегистрироваться
				</a>
			</form>
			<div class="hidden justify-center items-center font-light lg:w-1/2 lg:col">
				<h1 class="mb-3 text-5xl">15 НОВЫХ ОБЪЕКТОВ</h1>
				<p class="text-2xl text-gray-700">35% годовых - рекордная доходность!</p>
			</div>
			<LoginFooter />
		</main>
	);
}
