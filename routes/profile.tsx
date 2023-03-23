import MyProfile from "../islands/MyProfile.tsx";
import MySetting from "../islands/MySetting.tsx";
import Security from "../islands/Security.tsx";
import ProgressBarComponent from "../islands/ProgressBar.tsx";
// import { asset } from "$fresh/runtime.ts";

interface INotification {
	date: string;
	time: string;
	dsc: string;
}

export default function ProfileScreen() {
	return (
		<div class="row flex-wrap px-16 pt-8 bg-gray-white justify-between box-border">
			<MyProfile />
			<div class="w-[42vw]" style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, auto))", gap: "1.25rem" }}>
				<MySetting />
				<Security />
				<NotificationComponent />
				<ProgressBarComponent />
			</div>
		</div>
	);
}

function NotificationComponent() {
	let notifications: INotification[] = [];
	for (let i = 0; i < 10; i++) {
		notifications.push({ date: "18/02/23", time: "14:05", dsc: "Пятьдесят восемь инвесторов получили свои первые дивиденды. Поздравляем!" });
	}

	return (
		<div class="w-[21vw] h-[406px] pt-7 pb-9 col items-center text-black bg-white">
			<span class="w-9/12 text-darkGray text-2xl font-bold">Уведомления</span>
			<div class="w-9/12 h-[71%] border-y border-gray-dashed py-4 col mt-4 overflow-auto">
				{notifications.map((notification) => <Notification notification={notification} />)}
			</div>
		</div>
	);
}

function Notification({ notification }: { notification: INotification }) {
	return (
		<div class="col bg-gray-white rounded-sm my-1 px-3">
			<div class="row justify-between">
				<span class="text-base">{notification.date}</span>
				<span class="text-base">{notification.time}</span>
			</div>
			<span class="text-xs">{notification.dsc}</span>
		</div>
	);
}
