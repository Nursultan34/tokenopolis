import Calendar from "#/calendar.ts";

const calendar = new Calendar();
const currentMonth = calendar.create()
currentMonth.days[3].event = { head: 'Test sms', body: 'Test sms x2' };

export default function CalendarPage() {
    return (
        <div class="bg-white">
            <div class="col justify-center">
                <div class="flex flex-row-reverse items-center">
                    <button class="w-9 h-9 text-lg text-darkGray rounded-sm border border-solid border-gray-dashed">&#62;</button>
                    <span class="text-lg text-darkGray mr-[20px]">{`${currentMonth.monthName} ${currentMonth.year}`}</span>
                    <button class="w-9 h-9 text-lg text-darkGray rounded-sm border border-solid border-gray-dashed mr-[20px]">&#60;</button>
                </div>
                <div class="row justify-between mt-[20px]">
                    {calendar.days.map(dayOfWeek => <div class="w-48 h-10 bg-gray-main text-white text-sm col justify-center items-center">{dayOfWeek}</div>)}
                </div>
                <div class="row justify-between flex-wrap">
                    {currentMonth.days.map(dayOfMonth => <DayOfMonth event={dayOfMonth.event}>{dayOfMonth.day}</DayOfMonth>)}
                </div>
            </div>
        </div>
    ); 
}

function DayOfMonth({event, children}) {
    if (!event) { 
        return (
            <div class="col mt-2">
                <div class="w-48 h-14 row items-center bg-gray-bg border-y border-gray-dashed">
                    <span class="w-12 ml-2 text-darkGray text-2xl">{children}</span>
                </div>
                <div class="w-48 h-20 bg-white border-b-1 border-gray-dashed"></div>
            </div>
        );
    } else {
        return (
            <div class="col mt-2">
                <div class="w-48 h-14 row items-center bg-yellow-light border-y border-gray-dashed">
                    <span class="w-12 ml-2 text-darkGray text-2xl">{children}</span>
                    <span class="ml-2 text-black text-xs">{event.head}</span>
                </div>
                <div class="w-48 h-20 p-2 text-base text-darkGray bg-white border-b-1 border-gray-dashed">{event.body}</div>
            </div>
        );
    }
}
