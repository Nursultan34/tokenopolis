/* import Calendar from "#/calendar.ts";
 * import { useState } from "preact/hooks";
 * 
 * export default function CalendarComponent() {
 * 	const [date] = useState({
 * 		year: new Date().getFullYear(),
 * 		month: new Date().getMonth(),
 * 	});
 * 	const [calendar, setCalendar] = useState(new Calendar(date).create());
 * 
 * 	function incrementDate() {
 * 		if (date.month === 11) {
 * 			date.year += 1;
 * 			date.month = 0;
 * 		} else {
 * 			date.month += 1;
 * 		}
 * 		setCalendar(new Calendar(date).create());
 * 	}
 * 
 * 	function decrementDate() {
 * 		if (date.month === 0) {
 * 			date.year -= 1;
 * 			date.month = 11;
 * 		} else {
 * 			date.month -= 1;
 * 		}
 * 		setCalendar(new Calendar(date).create());
 * 	}
 * 
 * 	return (
 * 		<div class="col justify-center bg-gray-white">
 * 			<div class="flex flex-row-reverse items-center">
 * 				<button class="w-9 h-9 text-lg text-darkGray rounded-sm border border-solid border-gray-dashed" onClick={incrementDate}>&#62;</button>
 * 				<span class="text-lg text-center w-32 text-darkGray mr-5">{`${calendar.monthName} ${calendar.year}`}</span>
 * 				<button class="w-9 h-9 text-lg text-darkGray rounded-sm border border-solid border-gray-dashed mr-5" onClick={decrementDate}>&#60;</button>
 * 			</div>
 * 			<div style={{ display: "grid", gridTemplateColumns: "repeat(7, minmax(0, auto))", justifyContent: "space-between", marginTop: "7px" }}>
 * 				{calendar.daysOfWeek.map((dayOfWeek) => <div class="w-48 h-10 bg-gray-main text-white text-sm col justify-center items-center">{dayOfWeek}</div>)}
 * 			</div>
 * 			<div style={{ display: "grid", gridTemplateColumns: "repeat(7, minmax(0, auto))", justifyContent: "space-between" }}>
 * 				{calendar.days.map((dayOfMonth) => <DayOfMonth event={dayOfMonth.event}>{dayOfMonth.day}</DayOfMonth>)}
 * 			</div>
 * 		</div>
 * 	);
 * }
 * 
 * function DayOfMonth({ event, children }) {
 * 	let styleOfDay: string = "w-48 h-14 row items-center border-y border-gray-dashed ";
 * 	!!event ? styleOfDay += "bg-gray-bg" : styleOfDay += "bg-yellow-light";
 * 	return (
 * 		<div class="col mt-2">
 * 			<div class={styleOfDay}>
 * 				<span class="w-12 ml-2 text-darkGray text-2xl">{children}</span>
 * 				<span class="ml-2 text-black text-xs">{event.head}</span>
 * 			</div>
 * 			<div class="w-48 h-20 p-2 text-base text-darkGray bg-white border-b-1 border-gray-dashed">{event.body}</div>
 * 		</div>
 * 	);
 * } */

export default function CalendarComponent() {
	return <></>;
}
