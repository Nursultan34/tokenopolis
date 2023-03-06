import { FunctionComponent, RenderableProps } from "preact";
import { css, tw } from "twind/css";
import { asset } from "$fresh/runtime.ts";

interface IMenuButton {
	img: string;
	desc: string;
}

const MenuButton = ({ img, desc }: IMenuButton) => {
	const shadowButton = css({
		"&:hover": {
			boxShadow: "1px 1px 10px 0px rgba(0, 0, 0, 0.20)",
			borderRadius: 2,
		},
	});
	return (
		<div className={`flex flex-col justify-center items-center hover:bg-white ${tw(shadowButton)}`} style={{ width: 144, height: 80 }}>
			<img src={asset(img)} style={{ width: 26, height: 26 }} />
			<text className="text-xs font-light mt-1.5">{desc}</text>
		</div>
	);
};

export function SideMenu({ children }: any) {
	const sideShadow = css`box-shadow: inset -1px 0px 3px 0px rgba(0, 0, 0, 0.30);`;
	return (
		<div className={`flex flex-row h-[100%]`}>
			<div className={`flex flex-col w-36 bg-sideMenuColor ${tw(sideShadow)}`}>
				<div className="flex flex-col justify-start items-center" style={{ display: "flex", flex: 4 }}>
					<MenuButton img="sideMenuIcon/house.png" desc="ГЛАВНАЯ" />
					<MenuButton img="sideMenuIcon/buildings2.png" desc="ОБЪЕКТЫ" />
					<MenuButton img="sideMenuIcon/emptywallet.png" desc="КОШЕЛЕК" />
					<MenuButton img="sideMenuIcon/bitcoinconvert.png" desc="ТРАНЗАКЦИИ" />
					<MenuButton img="sideMenuIcon/chart.png" desc="АНАЛИТИКА" />
					<MenuButton img="sideMenuIcon/calendar.png" desc="КАЛЕНДАРЬ" />
					<MenuButton img="sideMenuIcon/profilecircle.png" desc="ВАШ МЕНЕДЖЕР" />
				</div>
				<div className="flex-col justify-start items-center" style={{ display: "flex", flex: 1 }}>
					<MenuButton img="sideMenuIcon/messagequestion.png" desc="FAQ" />
					<MenuButton img="sideMenuIcon/settings2.png" desc="НАСТРОЙКИ" />
				</div>
			</div>
			{children}
		</div>
	);
}
