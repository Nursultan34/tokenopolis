import { css, tw } from "twind/css";
import CardObjectComponent from "../../islands/ActualCardObject.tsx";

interface IObjectInfo {
	numberObject: string;
	objectName: string;
	objectLocate: string;
}

interface ITokenObject {
	tokenImage: string;
	tokenName: string;
	minXlm: string;
	payCount: number;
}

export interface ICardObjectComponent {
	objectImage?: string;
	objectInfo?: IObjectInfo;
	readiness?: number;
	tokenObject?: ITokenObject;
	countObject?: number;
	cardType: string;
}

interface IUpCardComponent {
	first: string;
	second: string;
	three: string;
	typeCard: string;
}

export type DataType = {
	testObjectInfo?: IObjectInfo;
	testObjectToken?: ITokenObject;
};
export function ActualObjectComponent(props: DataType) {
	const scrollbarStyle = css({
		"&::-webkit-scrollbar": {
			width: "15px",
		},
		"&::-webkit-scrollbar-track": {
			scrollbarColor: "white",
			width: "100px",
		},
		"&::-webkit-scrollbar-thumb": {
			backgroundColor: "#FFD600",
			borderRadius: "2px",
		},
	});
	return (
		<div className="bg-white h-full w-full pl-5 pr-5 overflow-hidden">
			<UpCardComponent first="Актуальные объекты" second="ГОТОВНОСТЬ" three="ТОКЕНЫ" typeCard="all" />
			<div className={`mt-2 h-5/6 overflow-auto ${tw(scrollbarStyle)} pl-2`}>
				<CardObjectComponent
					objectImage={"https://www.alfaplan.ru/upload/information_system_33/1/8/4/item_1846/information_items_property_254476.webp"}
					objectInfo={props.testObjectInfo}
					cardType={"all"}
					tokenObject={props.testObjectToken}
					readiness={80}
				/>
				<CardObjectComponent
					objectImage={"https://www.alfaplan.ru/upload/information_system_33/1/8/4/item_1846/information_items_property_254476.webp"}
					objectInfo={props.testObjectInfo}
					cardType={"all"}
					tokenObject={props.testObjectToken}
					readiness={80}
				/>
				<CardObjectComponent
					objectImage={"https://www.alfaplan.ru/upload/information_system_33/1/8/4/item_1846/information_items_property_254476.webp"}
					objectInfo={props.testObjectInfo}
					cardType={"all"}
					tokenObject={props.testObjectToken}
					readiness={80}
				/>
				<CardObjectComponent
					objectImage={"https://www.alfaplan.ru/upload/information_system_33/1/8/4/item_1846/information_items_property_254476.webp"}
					objectInfo={props.testObjectInfo}
					cardType={"all"}
					tokenObject={props.testObjectToken}
					readiness={80}
				/>
				<CardObjectComponent
					objectImage={"https://www.alfaplan.ru/upload/information_system_33/1/8/4/item_1846/information_items_property_254476.webp"}
					objectInfo={props.testObjectInfo}
					cardType={"all"}
					tokenObject={props.testObjectToken}
					readiness={80}
				/>
				<CardObjectComponent
					objectImage={"https://www.alfaplan.ru/upload/information_system_33/1/8/4/item_1846/information_items_property_254476.webp"}
					objectInfo={props.testObjectInfo}
					cardType={"all"}
					tokenObject={props.testObjectToken}
					readiness={80}
				/>
			</div>
		</div>
	);
}

function UpCardComponent(props: IUpCardComponent) {
	return (
		<div className="flex flex-row justify-end items-end h-[calc(3rem)] -mt-2">
			<span
				style={{ display: "flex", flex: props.typeCard === "all" ? 2 : 5 }}
				className={`${props.typeCard === "all" ? "text-xl" : "text-base"} font-medium justify-center items-center`}
			>
				{props.first}
			</span>
			<span
				style={{ display: "flex", flex: 1, marginLeft: props.typeCard === "all" ? 120 : 100 }}
				className={`justify-center items-center text-gray-dashed ${props.typeCard === "all" ? "text-sm" : "text-xs"}`}
			>
				{props.second}
			</span>
			<span
				style={{ display: "flex", flex: 1, marginLeft: props.typeCard === "all" ? 40 : 40 }}
				className={`justify-end items-center text-gray-dashed ${props.typeCard === "all" ? "text-sm" : "text-xs"} `}
			>
				{props.three}
			</span>
			<span style={{ display: "flex", flex: 2 }} className="justify-end items-center"></span>
		</div>
	);
}
