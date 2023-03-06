import { asset } from "$fresh/runtime.ts";
import IconMessageUser from "../../islands/IconUser.tsx";
export function Header() {
	return (
		<header className={`h-full w-full bg-white flex flex-row`}>
			<div className={`grid flex-none w-36 justify-items-center items-center`}>
				<img src={asset("headerImage/LogoIcon.png")} style={{ width: 45, height: 47 }} />
			</div>
			<div className="flex-auto w-max flex items-center">
				<text className="text-sm text-gray-main font-sans font-light ml-6">ВАШ КОШЕЛЕК:</text>
				<text className="text-sm text-gray-main font-sans ml-3">1Cs4wu6pu5qCZ35bSLNVzG..</text>
				<img className="ml-3" src={asset("headerImage/documentcopy.png")} style={{ width: 24, height: 24 }}></img>
				<img className="ml-3" src={asset("headerImage/QrCode.png")} style={{ width: 47, height: 39 }}></img>
			</div>
			<div className="flex-auto flex flex-row w-max items-center justify-end">
				<div className="flex flex-row justify-center items-center mr-4">
					<div className="w-[56px] h-[56px] rounded-[50px] border border-gray-bg mr-3 flex justify-center items-center">
						<img src={asset("headerImage/EllipseImage.png")} className="w-[48px] h-[48px]" />
					</div>
					<text className="font-medium mr-3">Nikita Resheteev</text>
					<div className="mr-7">
						<IconMessageUser />
					</div>
				</div>
			</div>
		</header>
	);
}
