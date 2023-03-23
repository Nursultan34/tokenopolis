import { asset } from "$fresh/runtime.ts";

const dataMas = [
	{
		date: "24/02/23",
		time: "11:45",
		desc: "Окончание строительства виллы по ул. Габела, ключи будут выданы в течение месяца",
	},
	{
		date: "18/02/23",
		time: "14:05",
		desc: "Пятьдесят восемь инвесторов получили свои первые дивиденды. Поздравляем!",
	},
	{
		date: "18/02/23",
		time: "14:05",
		desc: "Пятьдесят восемь инвесторов получили свои первые дивиденды. Поздравляем!",
	},
];
export default function CalendarComponent() {
	return (
		<div class="bg-white-light w-full h-full">
			<div class="flex justify-start items-center pl-6 mt-2" style={{ flex: 1 }}>
				<span class="text-lg font-medium">Календарь событий</span>
			</div>
			<div class="flex justify-center" style={{ flex: 0.5 }}>
				<div class="w-[86%] h-[1px] bg-gray-dashed" />
			</div>
			<div class="overflow-scroll" style={{ flex: 2, height: "45%" }}>
				{dataMas.map(CalendarEvent)}
			</div>
			<div class="flex justify-center mt-1" style={{ flex: 0.5 }}>
				<div class="w-[86%] h-[1px] bg-gray-dashed" />
			</div>
			<div class="flex justify-center items-center" style={{ flex: 1 }}>
				<img src={asset("/Calendar.png")} style={{ width: "45%", height: "45%" }} />
			</div>
		</div>
	);
}

function CalendarEvent({ date, time, desc }) {
	return (
		<div class="w-full h-[45%] bg-gray-white-light mt-2 items-center flex flex-col justify-center items-center pl-3 pr-3">
			<div class="flex flex-1 justify-between w-full items-center">
				<span>{date}</span>
				<span>{time}</span>
			</div>
			<div class="flex flex-1 items-center">
				<span class="text-xs text-gray-dashed">{desc}</span>
			</div>
		</div>
	);
}
