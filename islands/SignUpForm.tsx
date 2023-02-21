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
        <hr class="lg:hidden w-16 h-1 bg-white-900 relative right-9 my-8"/>
        <p class="text-xs lg:hidden pr-5 leading-6 mb-12">Удобный инструмент для инвестиций в недвижимость с помощью технологических технологий</p>
        <div class="row gap-x-5">
          <input required class="login-input w-5/12" name="name" type="text" placeholder="ИМЯ" />
          <input required class="login-input w-7/12" name="email" type="email" placeholder="ЭЛЕКТРОННАЯ ПОЧТА" {...bindInput(email, setEmail)} />
        </div>
        <IncorrectWarning pred={isEmail} val={email} msg="Неверный E-mail!" />
        <input required class="login-input" name="password" type={showPass ? "text" : "password"} placeholder="ВВЕДИТЕ ПАРОЛЬ" {...(bindInput(pass, setPass))} />
        <IncorrectWarning pred={isCorrectPassword} val={pass} msg="Пароль должен быть длиной не менee 8 символов!" />
        <button type="submit" class="login-submit">ЗАРЕГИСТРИРОВАТЬСЯ</button><br/>
        <a href="/login" class="m-0! p-2! hover:text-gray-600 text-xs">
          Уже есть аккаунт? Войти
        </a>
      </form>
      <div class="hidden lg:col justify-center items-center lg:w-1/2 font-light">
        <div class="text-right">
          <h1 class="text-5xl mb-3">БОЛЕЕ 100 ИНВЕСТОРОВ</h1>
          <p class="text-2xl text-gray-700">75 СОТРУДНИКОВ НА НАШИХ ОБЪЕКТАХ</p>
        </div>
      </div>
      <LoginFooter />
    </main>
  );
}

function IncorrectWarning({ pred, msg, val }: { pred: (_: string) => boolean, msg: string, val: string }) {
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
