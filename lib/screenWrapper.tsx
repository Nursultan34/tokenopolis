import Header from "@/islands/Header.tsx";
import Menu from "@/components/Menu.tsx";

export default function screenWrapper(
	children: any,
	address = "1Cs4wu6pu5qCZ35bSLNVzG..",
	name = "Nikita Resheteev",
) {
	return (
		<main class="col h-screen w-screen bg-white-light dark:bg-black text-black dark:text-white-light">
			<Header address={address} name={name} />
			<div class="row h-[90%]">
				<Menu />
				<div class="h-full w-full pr-[8vw] pl-[3vw] py-[4vh] bg-gray-light">
					{children}
				</div>
			</div>
		</main>
	);
}
