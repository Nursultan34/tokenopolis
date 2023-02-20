import { asset } from "$fresh/runtime.ts";
import NightThemeSwitcher from "@/islands/NightThemeSwitcher.tsx";

export default function LoginHeader() {
    return (
      <div class="login-header">
        <div class="flex flex-row items-center px-7 lg:px-20">
          <img class="h-14 mr-5" src={asset("/logo-yellow.svg")} />
          <h1 class="text-2lg font-light">ТОКЕНОПОЛИС</h1>
          <span class="text-xs mx-3 hidden lg:block ml-8">En</span>
          <span class="text-xs mx-3 hidden lg:block">Рус</span>
        </div>
        <div class="flex flex-row items-center px-12">
          <NightThemeSwitcher />
        </div>
      </div>
    );
}
