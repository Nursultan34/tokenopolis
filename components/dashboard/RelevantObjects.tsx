import { css, tw } from "twind/css";
import { asset } from "$fresh/runtime.ts";

interface ObjectInfo {
    numberObject: string;
    objectName: string;
    objectLocate: string;
}

interface TokenObject {
    tokenImage: string;
    tokenName: string;
    minXlm: string;
    payCount: number;
}

export interface CardObject {
    img?: string;
    info?: ObjectInfo;
    readiness?: number;
    token?: TokenObject;
    count?: number;
    cardType: string;
}

interface UpCard {
    first: string;
    second: string;
    three: string;
    typeCard:string;
}

export interface DataType {
    testObjectInfo?: ObjectInfo;
    testObjectToken?: TokenObject;
}

export default function RelevantObjects (props: DataType) {
    const scrollbarStyle = css({
        '&::-webkit-scrollbar' : {
            width: '15px',
          },
          '&::-webkit-scrollbar-track' : {
            scrollbarColor: 'white',
            width: '100px',
          },
         '&::-webkit-scrollbar-thumb': {
            backgroundColor: '#FFD600',    
            borderRadius: '2px',      
          }
    })
    return(
        <div class="bg-white h-full w-full pl-5 pr-5 overflow-hidden">
            <UpCardComponent first="Актуальные объекты" second="ГОТОВНОСТЬ" three="ТОКЕНЫ" typeCard="all"/>
            <div class={`mt-2 h-5/6 overflow-auto ${tw(scrollbarStyle)} pl-2`}>
			{ Array(6)
				.fill({ img: "https://www.alfaplan.ru/upload/information_system_33/1/8/4/item_1846/information_items_property_254476.webp"
					  , info: props.testObjectInfo
					  , token: props.testObjectToken
					  , readiness: 80 })
				.map(ObjectCard) }
            </div>
        </div>
    )
}

function ObjectCard({ img, info, token, readiness }) {
    const backgroundImage = css`background-image: url(${asset('dashboardIcon/percent.png')}); background-size: no-repeat; background-position: center; background-size: cover; width: 62px; height: 62px;`;
	return (
        <div class="w-full bg-gray-light flex flex-row rounded justify-center items-center mt-2 hover:bg-gray-coo hover:shadow-side" style={{height: 120}}>
            <div class="rounded-md" style={{display: 'flex', flex: 0.8}}>
                <img class="rounded" src={img} style={{width: 125, height: 120}}/>
            </div>
            <div class="flex flex-col" style={{display: 'flex', flex: 1}}>
                <text class="text-xs text-gray-dark">ОБЪЕКТ №{info?.numberObject}</text>
                <text class="text-sm font-semibold mt-1">{info?.objectName}</text>
                <div class="flex flex-row mt-1">
                    <img src={asset('dashboardIcon/location.png')} style={{width:16, height: 16}} />
                    <text class="text-yellow-dark text-xs">{info?.objectLocate}</text>
                </div>
            </div>
			<div class={`flex flex-col justify-center items-center`} style={{display: 'flex', flex: 1}}>
				<div class={`${tw(backgroundImage)} flex justify-center items-center`} style={{width: 62, height: 62}}>
					<text class="font-semibold text-lg">{readiness}%</text>
				</div>
			</div>
            <div class="flex flex-col justify-center items-center" style={{display: 'flex', flex: 1}}>
                <div class="flex flex-row justify-center items-center">
                    <div class="mr-1" style={{display: 'flex', width: 20, height: 20}}>
                        <img style={{width: 20, height: 20}} src={token?.tokenImage}/>
                    </div>
                    <div style={{display: 'flex'}} class="flex flex-col">
                        <text class="font-light">{token?.tokenName}</text>
                        <text class="font-light">{token?.minXlm}</text>
                    </div>
                </div>
                <div class="text-sm font-light text-green-dark">{token?.payCount} УЖЕ КУПИЛИ</div>
            </div>
            <div class="flex flex-col justify-center items-center" style={{display: 'flex', flex: 1}}>
                <button class="border border-gray-cool bg-white-light rounded-sm text-sm font-light hover:bg-gray-cool" style={{width: '10rem', height: 40}}>подробнее</button>
                <button class="border mt-1 border-yellow-orange bg-yellow-orange rounded-sm font-light hover:bg-yellow-main" style={{width: '10rem', height: 40}}>ИНВЕСТИРОВАТЬ</button>
            </div>
        </div>
	)
}

function UpCardComponent(props: UpCard) {
    return(
        <div class="flex flex-row justify-end items-end h-[calc(3rem)] -mt-2">
            <span style={{display: 'flex', flex: props.typeCard === 'all' ? 2 : 5}} class={`${props.typeCard === 'all' ? 'text-xl' : 'text-base'} font-medium justify-center items-center`}>{props.first}</span>
            <span style={{display: 'flex', flex: 1, marginLeft: props.typeCard === 'all' ? 120 : 100}}
		          class={`justify-center items-center text-gray-dashed ${props.typeCard === 'all' ? 'text-sm' :'text-xs'}`}>{props.second}</span>
            <span style={{display: 'flex', flex: 1, marginLeft: props.typeCard === 'all' ? 40 : 40}}
		          class={`justify-end items-center text-gray-dashed ${props.typeCard === 'all' ? 'text-sm' :'text-xs'} `}>{props.three}</span>
            <span style={{display: 'flex', flex: 2}} class="justify-end items-center"></span>
        </div>
    )
}
