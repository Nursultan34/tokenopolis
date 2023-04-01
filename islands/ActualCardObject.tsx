import { ICardObjectComponent } from "../components/dashboard/ActualObject.tsx";
import { asset } from "$fresh/runtime.ts";
import { css, tw } from "twind/css";

export default function ActualCardObjectComponent(props: ICardObjectComponent) {
	const backgroundImage = css`background-image: url(${
		asset("/dashboardIcon/percent.png")
	}); background-size: no-repeat; background-position: center; background-size: cover; width: 62px; height: 62px;`;
	return (
		<div
			className={"w-full bg-gray-light flex flex-row rounded justify-center items-center mt-2 hover:bg-gray-coo hover:shadow-side"}
			style={{ height: props.cardType === "all" ? 120 : 100 }}
			onClick={() => console.log("ddddddd")}
		>
			<div className={"rounded-md"} style={{ display: "flex", flex: 0.8 }}>
				<img className="rounded" src={props.objectImage} style={{ width: props.cardType === "all" ? 125 : 110, height: props.cardType === "all" ? 120 : 100 }} />
			</div>
			<div className={`flex flex-col ${props.cardType === "all" ? "" : "ml-2"}`} style={{ display: "flex", flex: 1 }}>
				<text className="text-xs text-gray-dark">ОБЪЕКТ №{props.objectInfo?.numberObject}</text>
				<text className={` ${props.cardType === "all" ? "text-sm" : "text-xs"} font-semibold mt-1`}>{props.objectInfo?.objectName}</text>
				{props.cardType === "all" && (
					<div className="flex flex-row mt-1">
						<img src={asset("/dashboardIcon/location.png")} style={{ width: 16, height: 16 }} />
						<text className="text-yellow-dark text-xs">{props.objectInfo?.objectLocate}</text>
					</div>
				)}
			</div>
			{props.cardType === "all" && (
				<div className={`flex flex-col justify-center items-center`} style={{ display: "flex", flex: 1 }}>
					<div className={`${tw(backgroundImage)} flex justify-center items-center`} style={{ width: 62, height: 62 }}>
						<text className="font-semibold text-lg">{props.readiness}%</text>
					</div>
				</div>
			)}
			<div className="flex flex-col justify-center items-center" style={{ display: "flex", flex: 1 }}>
				<div className="flex flex-row justify-center items-center">
					<div className="mr-1" style={{ display: "flex", width: 20, height: 20 }}>
						<img style={{ width: 20, height: 20 }} src={props.tokenObject?.tokenImage} />
					</div>
					<div style={{ display: "flex" }} className="flex flex-col">
						<text className="font-light">{props.tokenObject?.tokenName}</text>
						{props.cardType === "all" && <text className="font-light">{props.tokenObject?.minXlm}</text>}
					</div>
				</div>
				<div className={`${props.cardType === "all" ? "text-sm" : "text-xs"} font-light text-green-dark`}>{props.tokenObject?.payCount} УЖЕ КУПИЛИ</div>
			</div>
			{props.cardType === "all" && (
				<div className="flex flex-col justify-center items-center" style={{ display: "flex", flex: 1 }}>
					<button className="border border-gray-cool bg-white-light rounded-sm text-sm font-light hover:bg-gray-cool" style={{ width: "10rem", height: 40 }}>
						подробнее
					</button>
					<button className="border mt-1 border-yellow-orange bg-yellow-orange rounded-sm font-light hover:bg-yellow-main" style={{ width: "10rem", height: 40 }}>
						ИНВЕСТИРОВАТЬ
					</button>
				</div>
			)}
			{props.cardType === "my" && (
				<div className="flex justify-center items-center" style={{ display: "flex", flex: 1 }}>
					<div>{props.countObject}</div>
				</div>
			)}
		</div>
	);
}
