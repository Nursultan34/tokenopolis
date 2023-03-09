import Header from "@/islands/Header.tsx";
import Menu from "@/components/Menu.tsx";

export default function dashboardScreen(children: any) {
	return (
		<main class="col h-screen w-screen bg-white-dark dark:bg-dark-midnight">
			<Header />
			<div class="row h-[90%]" style={{ display: "flex", flex: 10 }}>
				<Menu />
				<div class="h-full w-full bg-white-dark dark:bg-black p-5">
					{children}
				</div>
			</div>
		</main>
	);
}
