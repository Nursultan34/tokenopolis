import Header from "@/islands/Header.tsx";
import Menu from "@/components/Menu.tsx";

export default function screenWrapper(children: any, address = "1Cs4wu6pu5qCZ35bSLNVzG..", name = "Nikita Resheteev") {
	return (
		<main class="col h-screen w-screen bg-white-light dark:bg-black text-black dark:text-white-light">
			<div
				class={`h-[10%] flex justify-center items-center`}
				style={{ display: "flex", flex: 1 }}
			>
				<Header address={address} name={name} />
			</div>
			<div
				class="row h-[90%]"
				style={{ display: "flex", flex: 10 }}
			>
				<Menu />
				<div class="h-full w-full p-5 bg-gray-back">
					{children}
				</div>
			</div>
		</main>
	);
}
