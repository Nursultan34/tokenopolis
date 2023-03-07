import { asset } from "$fresh/runtime.ts";
/* import IconMessageUser from "@/islands/IconUser.tsx"; */

export default function Header() {
	return (
		<header class="h-28 flex-shrink-0 w-full bg-white flex flex-row">
			<div class="grid flex-none w-36 justify-items-center items-center">
				<img src={asset("headerImage/LogoIcon.png")} class="w-11 h-12" />
			</div>
			<div class="flex-auto w-max flex items-center">
				<text class="text-sm text-gray-main font-sans font-light ml-6">ВАШ КОШЕЛЕК:</text>
				<text class="text-sm text-gray-main font-sans ml-3">1Cs4wu6pu5qCZ35bSLNVzG..</text>
				<img class="ml-3" src={asset("headerImage/documentcopy.png")} style={{ width: 24, height: 24 }}></img>
				<img class="ml-3" src={asset("headerImage/QrCode.png")} style={{ width: 47, height: 39 }}></img>
			</div>
			<div class="flex-auto flex flex-row w-max items-center justify-end">
				<div class="flex flex-row justify-center items-center mr-4">
					<div class="w-[56px] h-[56px] rounded-[50px] border border-gray-bg mr-3 flex justify-center items-center">
						<img src={asset("headerImage/EllipseImage.png")} class="w-[48px] h-[48px]" />
					</div>
					<text class="font-medium mr-3">Nikita Resheteev</text>
					<div class="mr-7">
						{/* <IconMessageUser /> */}
					</div>
				</div>
			</div>
		</header>
	);
}
