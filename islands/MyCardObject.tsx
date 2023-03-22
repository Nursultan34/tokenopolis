import { asset } from "$fresh/runtime.ts";
import { tw, css } from "twind/css";

export interface ICardObjectComponent {
    objectImage?: string;
    objectInfo?: IObjectInfo;
    readiness?: number;
    tokenObject?: ITokenObject;
    countObject?: number;
    cardType: string;
}

export interface IObjectInfo {
    numberObject: string;
    objectName: string;
    objectLocate: string;
}

export interface ITokenObject {
    tokenImage: string;
    tokenName: string;
    minXlm: string;
    payCount: number;
}


export default function CardObjectComponent (props : ICardObjectComponent) {
    const backgroundImage = css`background-image: url(${asset('dashboardIcon/percent.png')}); background-size: no-repeat; background-position: center; background-size: cover; width: 62px; height: 62px;`
    return(
        <div class={"w-full bg-gray-light flex flex-row rounded justify-center items-center mt-2 hover:shadow-side"} style={{height: props.cardType === 'all' ? 120 : 100}} onClick={()=>console.log('rer')}>
            <div class={"rounded-md"} style={{display: 'flex', flex: 0.8}}>
                <img class="rounded" src={props.objectImage} style={{width: props.cardType === 'all' ? 125 : 110, height: props.cardType === 'all' ? 120 : 100}}/>
            </div>
            <div class={`flex flex-col ${props.cardType === 'all' ? '' : 'ml-2'}`} style={{display: 'flex', flex: 1}}>
                <text class="text-xs text-gray-dark">ОБЪЕКТ №{props.objectInfo?.numberObject}</text>
                <text class={` ${props.cardType === 'all' ? 'text-sm' : 'text-xs'} font-semibold mt-1`}>{props.objectInfo?.objectName}</text>
                { props.cardType === 'all' &&<div class="flex flex-row mt-1">
                    <img src={asset('dashboardIcon/location.png')} style={{width:16, height: 16}} />
                    <text class="text-yellow-dark text-xs">{props.objectInfo?.objectLocate}</text>
                </div>}
            </div>
            {props.cardType === 'all' && (
                <div class={`flex flex-col justify-center items-center`} style={{display: 'flex', flex: 1}}>
                    <div class={`${tw(backgroundImage)} flex justify-center items-center`} style={{width: 62, height: 62}}>
                        <text class="font-semibold text-lg">{props.readiness}%</text>
                    </div>
                </div>
                )
            }
            <div class="flex flex-col justify-center items-center" style={{display: 'flex', flex: 1}}>
                <div class="flex flex-row justify-center items-center">
                    <div class="mr-1" style={{display: 'flex', width: 20, height: 20}}>
                        <img style={{width: 20, height: 20}} src={props.tokenObject?.tokenImage}/>
                    </div>
                    <div style={{display: 'flex'}} class="flex flex-col">
                        <text class="font-light">{props.tokenObject?.tokenName}</text>
                        {props.cardType === 'all' &&<text class="font-light">{props.tokenObject?.minXlm}</text>}
                    </div>
                </div>
                <div class={`${props.cardType === 'all' ? 'text-sm' : 'text-xs'} font-light text-green-dark`}>{props.tokenObject?.payCount} УЖЕ КУПИЛИ</div>
            </div>
            {props.cardType === 'all'&&<div class="flex flex-col justify-center items-center" style={{display: 'flex', flex: 1}}>
                <button class="border border-gray-cool bg-white-light rounded-sm text-sm font-light hover:bg-gray-cool" style={{width: '10rem', height: 40}}>подробнее</button>
                <button class="border mt-1 border-yellow-orange bg-yellow-orange rounded-sm font-light hover:bg-yellow-main" style={{width: '10rem', height: 40}}>ИНВЕСТИРОВАТЬ</button>
            </div>}
            {props.cardType === 'my'&&<div class="flex justify-center items-center"  style={{display: 'flex', flex: 1}}>
                <div>{props.countObject}</div>
            </div>}
        </div>
    )
}