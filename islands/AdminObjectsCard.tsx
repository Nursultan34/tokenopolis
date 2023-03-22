import { ObjectDataType } from "../components/admin/AdminObjects.tsx";
import { asset } from "$fresh/runtime.ts";

export default function (props : ObjectDataType) {
    return(
        <article class="w-full h-32 flex bg-gray-light mt-5">
            <div class="w-[14%] h-full flex items-center justify-center">
                <img src={props.image} class="w-24 h-24"/>
            </div>
            <div class="w-[20%] h-full ml-6 flex flex-col justify-center items-start">
                <div class="text-xs font-light text-gray-dark">Объект  №{props.number}</div>
                <div class="text-lg font-bold text-black">{props.name}</div>
                <div class="text-sm font-normal text-yellow-brown flex">
                    <img src={asset('adminIcon/location.png')} class="w-5 h-5 mr-1"/>
                    {props.location}
                    </div>
            </div>
            <div class="w-[12%] h-full flex flex-col justify-center items-center">
                <div class="text-sm font-light text-black">€{props.priceEuro}</div>
                <div class="text-sm font-light text-yellow-brown">{props.priceXLM}XLM</div>
            </div>
            <div class="w-[12%] h-full flex flex-col justify-center items-center">
                <div>{props.start}</div>
                <div>{props.finish}</div>
            </div>
            <div class="w-[12%] h-full flex justify-center items-center">
                <img src={props.tokenImage}/>
                <div>{props.token}</div>
            </div>
            <div class="w-[14%] h-full">
                <div>{props.investors}</div>
            </div>
            <div class="w-[14%] h-full flex">
                <button>
                    <img src="" />
                </button>
                <button>
                    <img src="" />
                </button>
            </div>
        </article>
    )
}