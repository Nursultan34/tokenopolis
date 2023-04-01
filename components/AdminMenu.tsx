import { asset } from "$fresh/runtime.ts";

export default function AdminMenu() {
	return (
		<nav class="col w-36 bg-sideMenuColor shadow-side">
			<div class="col justify-start items-center flex-grow-4">
				{[
					{ img: "/sideMenuIcon/buildings2.png", desc: "ОБЪЕКТЫ", href: "/admin/objects" },
					{ img: "/sideMenuIcon/calendar.png", desc: "КАЛЕНДАРЬ", href: "/admin/calendar" },
					{ img: "/sideMenuIcon/profilecircle.png", desc: "УВЕДОМЛЕНИЯ", href: "/admin/notifications" },
					{ img: "/sideMenuIcon/profilecircle.png", desc: "ВАШ МЕНЕДЖЕР", href: "/admin/manager" },
				].map(MenuButton)}
			</div>
			<div class="col justify-start items-center flex-1">
				{[{ img: "/headerImage/logout.png", desc: "ВЫХОД", href: "/login" }]
					.map(MenuButton)}
			</div>
		</nav>
	);
}

const MenuButton = ({ img, desc, href }: { img: string; desc: string; href: string }) => {
	return (
		<a href={href} class={`flex flex-col justify-center items-center hover:bg-white hover:shadow-menu-button rounded-sm w-36 h-20`}>
			<img src={asset(img)} class="w-6 h-6" />
			<text class="text-xs font-light mt-1.5">{desc}</text>
		</a>
	);
};
