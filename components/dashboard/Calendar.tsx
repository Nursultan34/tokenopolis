import {asset} from '$fresh/runtime.ts';

const dataMas = [
    {
        date: '24/02/23',
        time: '11:45',
        desc: 'Окончание строительства виллы по ул. Габела, ключи будут выданы в течение месяца',
    },
    {
        date: '18/02/23',
        time: '14:05',
        desc: 'Пятьдесят восемь инвесторов получили свои первые дивиденды. Поздравляем!',
    },
    {
        date: '18/02/23',
        time: '14:05',
        desc: 'Пятьдесят восемь инвесторов получили свои первые дивиденды. Поздравляем!',
    },
];
export default function CalendarComponent() {
    return (
        <div class="bg-white-light w-full h-full p-7">
            <span class="text-xl font-bold">
                Календарь событий
            </span>
            <hr class="text-gray-dashed" />
            <div class="overflow-scroll h-2/5 shadow-md">
                {dataMas.map(CalendarEvent)}
            </div>
            <hr class="text-gray-dashed" />
            <div class="flex justify-center items-center">
                <img
                    src={asset('/Calendar.png')}
                    class="w-3/5"
                />
            </div>
        </div>
    );
}

function CalendarEvent({date, time, desc}) {
    return (
        <div class="w-full bg-gray-light text-xs p-2 my-1">
            <div class="flex justify-between font-bold">
                <span>{date}</span>
                <span>{time}</span>
            </div>
            <span>{desc}</span>
        </div>
    );
}
