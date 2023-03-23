import CardObjectComponent from "@/islands/MyCardObject.tsx";
import { css } from "twind/css";
import { asset } from "$fresh/runtime.ts";

export default function MyObjects({ testObjectToken, testObjectInfo }) {
	return (
		<div class="bg-white-light h-full w-full pl-5 pr-5 overflow-hidden">
			<UpCardComponent first="Мои объекты" second="ТОКЕНЫ" third="КОЛИЧЕСТВО" />
			<div class={`mt-2 h-5/6 overflow-scroll pl-2`}>
				{Array(6).fill(
					<MyObject
						name="Montenegro, Soho komleks"
						img="https://www.alfaplan.ru/upload/information_system_33/1/8/4/item_1846/information_items_property_254476.webp"
						token={testObjectToken}
						id={123}
						amount={300}
						readiness={80}
						token={{ name: "ALFATOKEN", img: "" }}
					/>,
				)}
			</div>
		</div>
	);
}

function MyObject({ id, name, img, token, amount, readiness }) {
	const backgroundImage = css`background-image: url(${
		asset("dashboardIcon/percent.png")
	}); background-size: no-repeat; background-position: center; background-size: cover; width: 62px; height: 62px;`;
	return (
		<div class={"w-full bg-gray-light flex flex-row rounded justify-center items-center mt-2 hover:shadow-side"} style={{ height: 100 }}>
			<div class={"rounded-md"} style={{ display: "flex", flex: 0.8 }}>
				<img class="rounded" src={img} style={{ width: 110, height: 100 }} />
			</div>
			<div class="flex flex-col ml-2" style={{ flex: 1 }}>
				<text class="text-xs text-gray-dark">ОБЪЕКТ №{id}</text>
				<text class="text-xs font-semibold mt-1">{name}</text>
			</div>
			<div class="flex flex-col justify-center items-center" style={{ display: "flex", flex: 1 }}>
				<div class="flex flex-row justify-center items-center">
					<div class="mr-1" style={{ display: "flex", width: 20, height: 20 }}>
						<img style={{ width: 20, height: 20 }} src={token.img} />
					</div>
					<div style={{ display: "flex" }} class="flex flex-col">
						<text class="font-light">{token.name}</text>
					</div>
				</div>
				{/* TODO: readiness */}
			</div>
			<div class="flex justify-center items-center" style={{ display: "flex", flex: 1 }}>
				<div>{amount}</div>
			</div>
		</div>
	);
}

function UpCardComponent({ first, second, third }) {
	return (
		<div class="flex flex-row justify-end items-end h-calc(3rem) -mt-2">
			<span
				style={{ flex: 5 }}
				class="flex text-base font-medium justify-center items-center"
			>
				{first}
			</span>
			<span
				style={{ flex: 1, marginLeft: 100 }}
				class="flex justify-center items-center text-gray-dashed text-xs"
				k
			>
				{second}
			</span>
			<span
				style={{ display: "flex", flex: 1, marginLeft: 40 }}
				class="justify-end items-center text-gray-dashed text-xs"
			>
				{third}
			</span>
			<span style={{ display: "flex", flex: 2 }} class="justify-end items-center"></span>
		</div>
	);
}
