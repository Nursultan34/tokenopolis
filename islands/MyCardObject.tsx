import { asset } from "$fresh/runtime.ts";
import { css, tw } from "twind/css";

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

export default function CardObjectComponent(props: ICardObjectComponent) {
	const backgroundImage = css`background-image: url(${
		asset("/dashboardIcon/percent.png")
	}); background-size: no-repeat; background-position: center; background-size: cover; width: 62px; height: 62px;`;
	return (
		<div
			class={"w-full bg-gray-light flex flex-row rounded justify-center items-center mt-2 hover:shadow-side"}
			style={{ height: props.cardType === "all" ? 120 : 100 }}
		>
			<div class="rounded-md flex" style={{ flex: 0.8 }}>
				<img class="rounded" src={props.objectImage} style={{ width: props.cardType === "all" ? 125 : 110, height: props.cardType === "all" ? 120 : 100 }} />
			</div>
			<div class={`col ${props.cardType === "all" ? "" : "ml-2"}`}>
				<text class="text-xs text-gray-dark">ОБЪЕКТ №{props.objectInfo?.numberObject}</text>
				<text class={` ${props.cardType === "all" ? "text-sm" : "text-xs"} font-semibold mt-1`}>{props.objectInfo?.objectName}</text>
				{props.cardType === "all" && (
					<div class="flex flex-row mt-1">
						<img src={asset("/dashboardIcon/location.png")} style={{ width: 16, height: 16 }} />
						<text class="text-yellow-dark text-xs">{props.objectInfo?.objectLocate}</text>
					</div>
				)}
			</div>
			{props.cardType === "all" && (
				<div class="col center">
					<div class={`${tw(backgroundImage)} center`} style={{ width: 62, height: 62 }}>
						<text class="font-semibold text-lg">{props.readiness}%</text>
					</div>
				</div>
			)}
			<div class="col center" style={{ display: "flex", flex: 1 }}>
				<div class="row center">
					<div class="mr-1" style={{ display: "flex", width: 20, height: 20 }}>
						<img style={{ width: 20, height: 20 }} src={props.tokenObject?.tokenImage} />
					</div>
					<div class="col">
						<text class="font-light">{props.tokenObject?.tokenName}</text>
						{props.cardType === "all" && <text class="font-light">{props.tokenObject?.minXlm}</text>}
					</div>
				</div>
				<div class={`${props.cardType === "all" ? "text-sm" : "text-xs"} font-light text-green-dark`}>{props.tokenObject?.payCount} УЖЕ КУПИЛИ</div>
			</div>
			{props.cardType === "all" && (
				<div class="col center children:(border rounded-sm font-light)">
					<button class="border-gray-cool bg-white-light text-sm hover:bg-gray-cool" style={{ width: "10rem", height: 40 }}>
						подробнее
					</button>
					<button class="mt-1 border-yellow-orange bg-yellow-orange hover:bg-yellow-main" style={{ width: "10rem", height: 40 }}>
						ИНВЕСТИРОВАТЬ
					</button>
				</div>
			)}
			{props.cardType === "my" && (
				<div class="center">
					<div>{props.countObject}</div>
				</div>
			)}
		</div>
	);
}
