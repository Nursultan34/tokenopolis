import { ObjectDataType } from "../components/admin/AdminObjects.tsx";
import { asset } from "$fresh/runtime.ts";
import { useEffect, useState } from "preact/hooks";

export default function ({ image, number, name, location, priceEuro, priceXLM, start, finish, tokenImage, token, investors }: ObjectDataType) {
	const [size, setSize] = useState(false);
	// useEffect(()=>{
	//     console.log(size)
	// }, [])
	console.log("rrrr");
	function click() {
		console.log("press");
		setSize((prev) => !prev);
	}
	return (
		<div class={`w-full ${size ? "h-52" : "h-32"} flex bg-gray-light mt-5`}>
			<div class="w-[14%] h-full flex items-center justify-center">
				<img src={image} class="w-24 h-24" />
			</div>
			<div class="w-[20%] h-full ml-6 flex flex-col justify-center items-start">
				<div class="text-xs font-light text-gray-dark">Объект №{number}</div>
				<div class="text-lg font-bold text-black">{name}</div>
				<div class="text-sm font-normal text-yellow-brown flex">
					<img src={asset("adminIcon/location.png")} class="w-5 h-5 mr-1" />
					{location}
				</div>
			</div>
			<div class="w-[12%] h-full flex flex-col justify-center items-center">
				<div class="text-sm font-light text-black">€{priceEuro}</div>
				<div class="text-sm font-light text-yellow-brown">{priceXLM}XLM</div>
			</div>
			<div class="w-[12%] h-full flex flex-col justify-center items-center">
				<div>{start}</div>
				<div>{finish}</div>
			</div>
			<div class="w-[14%] h-full flex justify-center items-center">
				<img src={tokenImage} class="w-6 h-6 mr-2" />
				<div>{token}</div>
			</div>
			<div class="w-[12%] h-full flex justify-center items-center text-lg text-green-dark">
				<div>{investors}</div>
			</div>
			<div class="w-[14%] h-full flex">
				<button onClick={() => console.log("rer")}>
					<img src={asset("adminIcon/update.png")} class="w-10 h-10" />
				</button>
				<button>
					<img src={asset("adminIcon/delete.png")} class="w-10 h-10 ml-2" />
				</button>
			</div>
		</div>
	);
}
