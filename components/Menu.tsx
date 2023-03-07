import { asset } from "$fresh/runtime.ts";

export default function Menu() {
	return (
		<div class="col w-36 bg-sideMenuColor shadow-side">
			<div class="col justify-start items-center flex-grow-4">
				{[
					{ img: "sideMenuIcon/house.png", desc: "ГЛАВНАЯ" },
					{ img: "sideMenuIcon/buildings2.png", desc: "ОБЪЕКТЫ" },
					{ img: "sideMenuIcon/emptywallet.png", desc: "КОШЕЛЕК" },
					{ img: "sideMenuIcon/bitcoinconvert.png", desc: "ТРАНЗАКЦИИ" },
					{ img: "sideMenuIcon/chart.png", desc: "АНАЛИТИКА" },
					{ img: "sideMenuIcon/calendar.png", desc: "КАЛЕНДАРЬ" },
					{ img: "sideMenuIcon/profilecircle.png", desc: "ВАШ МЕНЕДЖЕР" },
				].map(MenuButton)}
			</div>
			<div class="col justify-start items-center flex-1">
				{[{ img: "sideMenuIcon/messagequestion.png", desc: "FAQ" }, { img: "sideMenuIcon/settings2.png", desc: "НАСТРОЙКИ" }].map(MenuButton)}
			</div>
		</div>
	);
}

const MenuButton = ({ img, desc }: { img: string; desc: string }) => {
	return (
		<div class={`flex flex-col justify-center items-center hover:bg-white shadow-menu-button rounded-sm w-36 h-20`}>
			<img src={asset(img)} class="w-6 h-6" />
			<text class="text-xs font-light mt-1.5">{desc}</text>
		</div>
	);
};
