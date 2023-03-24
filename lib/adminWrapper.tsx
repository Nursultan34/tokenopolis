import AdminHeader from "@/islands/AdminHeader.tsx";
import AdminMenu from "@/components/AdminMenu.tsx";

export default function adminWrapper(children: any) {
	return (
		<main class="col h-screen w-screen">
			<div class={`h-[10%] flex justify-center items-center`} style={{ display: "flex", flex: 1 }}>
				<AdminHeader />
			</div>
			<div class="row h-[90%] bg-white-dark" style={{ display: "flex", flex: 10 }}>
				<AdminMenu />
				<div class="h-full w-full bg-gray-light dark:bg-black p-5">
					{children}
				</div>
			</div>
		</main>
	);
}
