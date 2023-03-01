import { asset } from "$fresh/runtime.ts";
//import IconMessageUser from "@/islands/IconUser.tsx";
const IconMessageUser = () => <></>;
import NightThemeSwitcher from "@/islands/NightThemeSwitcher.tsx";

export default function Header() {
	return (
		<header class="h-20 bg-white flex flex-row">
			<div class="grid flex-none w-36 justify-items-center items-center">
				<img class="w-11 h-12" src={asset("headerImage/LogoIcon.png")} />
			</div>
			<div class="flex-auto w-max flex items-center">
				<text class="text-sm text-gray-main font-sans font-light ml-6">ВАШ КОШЕЛЕК:</text>
				<text class="text-sm text-gray-main font-sans ml-3">1Cs4wu6pu5qCZ35bSLNVzG..</text>
				<img class="ml-3 w-6 h-6" src={asset("headerImage/documentcopy.png")} />
				<img class="ml-3 w-12 h-10" src={asset("headerImage/QrCode.png")} />
				<div class="ml-8">
					<NightThemeSwitcher />
				</div>
			</div>
			<div class="flex-auto flex flex-row w-max items-center justify-end">
				<div class="flex flex-row justify-center items-center mr-4">
					<text class="font-medium mr-3">Nikita Resheteev</text>
					<div class="mr-7">
						<IconMessageUser />
					</div>
				</div>
			</div>
		</header>
	);
}
