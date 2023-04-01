import { asset } from "$fresh/runtime.ts";

interface NotificationType {
	number: string;
	month: string;
	desc: string;
}

/* Моковые данные */
const notificationInfo: NotificationType[] = [
	{
		number: "03",
		month: "ФЕВ",
		desc: "Опубликовать объект по улице Германа Титова",
	},
	{
		number: "04",
		month: "ФЕВ",
		desc: "Опубликовать объект по улице Германа Титова",
	},
	{
		number: "05",
		month: "ФЕВ",
		desc: "Опубликовать объект по улице Германа Титова",
	},
	{
		number: "06",
		month: "ФЕВ",
		desc: "Опубликовать объект по улице Германа Титова",
	},
	{
		number: "07",
		month: "ФЕВ",
		desc: "Опубликовать объект по улице Германа Титова",
	},
	{
		number: "08",
		month: "ФЕВ",
		desc: "Опубликовать объект по улице Германа Титова",
	},
];
export default function NotificationComponent() {
	return (
		<div class="flex flex-col items-center w-full h-full">
			<div class="items-center flex justify-center w-full h-[10%] mt-5">
				<button class="flex w-[90%] h-12 border flex justify-center items-center bg-gray-light border-gray-cool" onClick={() => console.log("tttt")}>
					<text class="text-base mr-4 font-light">Добавить уведомление</text>
					<img src="adminIcon/plus.png" class="w-7 h-7" />
				</button>
			</div>
			<div class="w-[100%] h-full flex flex-col justify-start items-center overflow-scroll mt-5">
				{notificationInfo.map(NotificationsCard)}
			</div>
		</div>
	);
}

function NotificationsCard({ number, month, desc }: NotificationType) {
	return (
		<div class="h-20 w-[90%] flex flex-initial flex-row mt-2 bg-gray-light">
			<div class="flex flex-col justify-center items-center w-[20%]">
				<div class="font-light">{number}</div>
				<div class="font-light">{month}</div>
			</div>
			<div class="flex items-center mr-2">
				<div class="w-[1.5px] h-[80%] bg-gray-cool" />
			</div>
			<div class="w-[70%] flex items-center">
				<div class="font-light">
					{desc}
				</div>
			</div>
			<div class="w-[30%] flex justify-center items-center">
				<img src={asset("/adminIcon/close.png")} class={"w-7 h-7"} />
			</div>
		</div>
	);
}
