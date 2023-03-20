import { asset } from "$fresh/runtime.ts";
import CalendarEvent from "../../islands/CalendarEvent.tsx";

export type CalendarEventObject = {
    date: string;
    time: string;
    desc: string;
}

export interface ICalendarEvent {
    mas: Array<CalendarEventObject>
}

const dataMas: Array<CalendarEventObject> = [
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
    }
]
export function CalendarComponent () {
    return(
        <div className="bg-white-light w-full h-full">
            <div className="flex justify-start items-center pl-6 mt-2" style={{display: 'flex', flex: 1}}>
                <span className="text-lg font-medium">Календарь событий</span>
            </div>
            <div className="flex justify-center" style={{display: 'flex', flex: 0.5}}>
                <div className="w-[86%] h-[1px] bg-gray-dashed"/>
            </div>
            <div className="overflow-scroll" style={{display: 'flex', flex: 2, height: '45%'}}>
                <CalendarEventComponent mas={dataMas}/>
            </div>
            <div className="flex justify-center mt-1" style={{display: 'flex', flex: 0.5}}>
                <div className="w-[86%] h-[1px] bg-gray-dashed"/>
            </div>
            <div className="flex justify-center items-center" style={{display: 'flex', flex: 1}}>
                <img src={asset('/Calendar.png')} style={{width: '45%', height: '45%'}}/>
            </div>
        </div>
    )
}

export function CalendarEventComponent (props: ICalendarEvent) {
    const {mas} = props
    return(
        <div className="w-full pl-6 pr-6">
            {mas.map((data) => (
                <CalendarEvent {...data}/>
            ))}
        </div>
    )
}