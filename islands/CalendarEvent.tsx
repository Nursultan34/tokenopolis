/* import { CalendarEventObject } from "../components/DashBoardComponent/CalendarComponent.tsx"; */

/* function CalendarEvent(props: CalendarEventObject) { */
function CalendarEvent(props) {
	const { date, time, desc } = props;
	return (
		<div className="w-full h-[45%] bg-gray-white mt-2 items-center flex flex-col justify-center items-center pl-3 pr-3">
			<div className="flex flex-1 justify-between w-full items-center">
				<span>{date}</span>
				<span>{time}</span>
			</div>
			<div className="flex flex-1 items-center">
				<span className="text-xs text-gray-dashed">{desc}</span>
			</div>
		</div>
	);
}

export default CalendarEvent;
