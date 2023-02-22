import { asset } from "$fresh/runtime.ts";

export default function NotFoundPage() {
    return <main class="col justify-center items-center h-screen">
        <img src={asset("/lk-logo-ns.svg")} class="h-36 animate-shadow-pulse" />
        <h1 class="text-6xl font-bold mb-4 mt-9">404</h1>
        <h2 class="text-2xl">
            Запрашиваемая вами страница не найдена<br/>
        </h2>
        <a href="/dashboard" class="row text-2xl text-gray-switcher mt-1.5">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left h-6 relative top-1 mr-2" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
            </svg>
            На главную
        </a>
    </main>;
}
