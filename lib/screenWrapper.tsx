import Header from "@/components/Header.tsx";
import Menu from "@/components/Menu.tsx";

export default function dashboardScreen(mainContent) {
    return <main class="col h-screen w-screen">
        <Header />
        <div class="row">
            <Menu />
            <div class="h-screen w-screen dark:bg-black">
                { mainContent }
            </div>
        </div>
    </main>;
}
