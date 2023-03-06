import CalendarEvent from "../../../islands/CalendarEvent.tsx";
import { CalendarEventObject, ICalendarEvent } from "../CalendarComponent.tsx";

export function CalendarEventComponent(props: ICalendarEvent) {
	const { mas } = props;
	return (
		<div className="w-full pl-6 pr-6">
			{mas.map((data) => <CalendarEvent {...data} />)}
		</div>
	);
}
