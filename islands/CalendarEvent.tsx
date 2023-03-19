
function CalendarEvent({ date, time, desc }) {
	return (
		<div class="w-full h-[45%] bg-gray-white mt-2 items-center flex flex-col justify-center items-center pl-3 pr-3">
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

export default CalendarEvent;
