import { asset } from "$fresh/runtime.ts";

export default function NotFoundPage() {
    return <main class="col justify-center items-center h-screen">
        <img src={asset("/lk-logo-ns.svg")} class="h-36 animate-shadow-pulse" />
        <h1 class="text-6xl font-bold mb-4 mt-9">404</h1>
        <h2 class="text-2xl">Запрашиваемая вами страница не найдена</h2>
    </main>;
}
