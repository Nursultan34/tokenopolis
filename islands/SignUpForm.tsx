import { useState } from "preact/hooks";
import { isEmail } from "https://deno.land/x/isemail/mod.ts";
import LoginHeader from "@/components/LoginHeader.tsx";
import LoginFooter from "@/components/LoginFooter.tsx";
import { bindInput } from "#/utils.ts";

export default function SignUpForm() {
	const [email, setEmail] = useState("");
	const [pass, setPass] = useState("");
	const [showPass, setShowPass] = useState(false);
	return (
		<main class="login-main">
			<LoginHeader />
			<form class="login-form" method="POST">
				<h1 class="login-h1">Регистрация</h1>
				{/* why right-9? 9 is the form padding */}
				<hr class="relative right-9 my-8 w-16 h-1 bg-white lg:hidden" />
				<p class="pr-5 mb-12 text-xs leading-6 lg:hidden">Удобный инструмент для инвестиций в недвижимость с помощью технологических технологий</p>
				<div class="gap-x-5 row">
					<input required class="w-5/12 login-input" name="name" type="text" placeholder="ИМЯ" />
					<input required class="w-7/12 login-input" name="email" type="email" placeholder="ЭЛЕКТРОННАЯ ПОЧТА" {...bindInput(email, setEmail)} />
				</div>
				<IncorrectWarning pred={isEmail} val={email} msg="Неверный E-mail!" />
				<input required class="login-input" name="password" type={showPass ? "text" : "password"} placeholder="ВВЕДИТЕ ПАРОЛЬ" {...(bindInput(pass, setPass))} />
				<IncorrectWarning pred={isCorrectPassword} val={pass} msg="Пароль должен быть длиной не менee 8 символов!" />
				<button type="submit" class="login-submit">ЗАРЕГИСТРИРОВАТЬСЯ</button>
				<br />
				<a href="/login" class="m-0! p-2! hover:text-gray-600 text-xs">
					Уже есть аккаунт? Войти
				</a>
			</form>
			<div class="hidden justify-center items-center font-light lg:w-1/2 lg:col">
				<div class="text-right">
					<h1 class="mb-3 text-5xl">БОЛЕЕ 100 ИНВЕСТОРОВ</h1>
					<p class="text-2xl text-gray-700">75 СОТРУДНИКОВ НА НАШИХ ОБЪЕКТАХ</p>
				</div>
			</div>
			<LoginFooter />
		</main>
	);
}

function IncorrectWarning({ pred, msg, val }: { pred: (_: string) => boolean; msg: string; val: string }) {
	// Warning is not displayed if the matches the predicate or not entered yet
	if (pred(val) || val == "") {
		return <></>;
	} else {
		return <p class="text-red-500">{msg}</p>;
	}
}

function isCorrectPassword(pass: string) {
	return pass.length >= 8;
}
