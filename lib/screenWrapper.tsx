import Header from "@/components/Header.tsx";
import Menu from "@/components/Menu.tsx";

export default function dashboardScreen(children: any) {
	return (
		<main class="col h-screen w-screen">
			<div class={`h-[10%] flex justify-center items-center`} style={{ display: "flex", flex: 1 }}>
				<Header />
			</div>
			<div class="row h-[90%] bg-white-dark" style={{ display: "flex", flex: 10 }}>
				<Menu />
				<div class="h-full w-full bg-white-dark dark:bg-black p-5">
					{children}
				</div>
			</div>
		</main>
	);
}
