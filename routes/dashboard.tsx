import { Handlers, PageProps } from "$fresh/server.ts";
/* import { getCookies } from "https://deno.land/std@v0.171.0/http/cookie.ts";
 * import * as stellar from "#/stellar.ts";
 * import { getUser } from "#/db.ts";
 * import { checkCookieAuth } from "#/auth.ts"; */
import screenWrapper from "@/lib/screenWrapper.tsx";
/* import NightThemeSwitcher from "@/islands/NightThemeSwitcher.tsx";
 * import { redirectTo } from "#/utils.ts";
 * import { Chart } from "$fresh_charts/mod.ts";
 * import type { ComponentChildren } from "preact"; */
//import RelevantObjectsComponent from "@/components/dashboard/RelevantObjects.tsx";
//import MyWalletComponent from "@/components/dashboard/MyWallet.tsx";
//import CalendarComponent from "@/components/dashboard/Calendar.tsx";
//import TransactionsComponent from "@/components/dashboard/Transactions.tsx";
/* import { DashboardComponent } from "../components/DashBoardComponent/DashboardComponent.tsx"; */

import { css, tw } from "twind/css";
import { ActualObjectComponent } from "../components/dashboard/ActualObject.tsx";
import { CalendarComponent } from "../components/dashboard/CalendarComponent.tsx";
import MyObjectComponent from "../components/dashboard/MyObjectComponent.tsx";
import { TransactionsComponent } from "../components/dashboard/TransactionsComponent.tsx";
import WalletComponent from "../components/dashboard/WalletComponent.tsx";
interface Token {
	name: string;
	img: string;
}

interface DashboardData {
	name: string;
	address: string;
	transactions: { target: string; incoming: boolean }[];
	balances: { name: string; img: string; valXLM: number; valEUR: number }[];
	relevantObjects: {
		id: number;
		name: string;
		img: string;
		token: Token;
		readiness: number;
		location: number;
		alreadyBought: number;
		minXLM: number;
	};
	myObjects: {
		id: number;
		name: string;
		img: string;
		token: Token;
		readiness: number;
		amount: number;
	};
	balanceEUR: number;
	balanceXLM: number;
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

const testObjectInfo: IObjectInfo = {
	numberObject: '40494',
	objectName: 'Montenegro, Soho komleks',
	objectLocate: 'Tivat 85320, Montenegro'
}

const testObjectToken: ITokenObject = {
	tokenImage: 'https://pngicon.ru/file/uploads/ikonka-bitkoin.png',
	tokenName: 'ALFATOKEN',
	minXlm: 'min 8XLM',
	payCount: 135,
}

export const handler: Handlers = {
	GET(req, ctx) {
		return ctx.render({
			name: "Никита",
			valXLM: 600,
			valEUR: 1234,
			balances: [
				{ name: "POLISVILLA", img: "img.png", valXLM: 100, valEUR: 69 },
			],
			relevantObjects: [
				{ id: 1, name: "uhh", img: "img.png", readiness: 80, token: {} },
			],
		});
	},
};

export default function Dashboard({ data }: PageProps<any>) {
	return screenWrapper(
		<article class="h-full w-full dark:bg-black flex-col" style={{ overflowY: "hidden"}}>
			<div class="flex h-[53%] w-full">
				<div class="h-full w-[68.5%] bg-white-light">
					<ActualObjectComponent testObjectInfo={testObjectInfo} testObjectToken={testObjectToken}/>
				</div>
				<div class="h-full w-[1.5%]"/>
				<div class="h-full w-[30%]">
					<WalletComponent />
				</div>
			</div>
			<div class="h-[2.5%] w-full"/>
			<div class="flex h-[45%] w-full">
				<div class="h-full w-[43.5%]">
					<MyObjectComponent testObjectInfo={testObjectInfo} testObjectToken={testObjectToken} />
				</div>
				<div class="w-[1.5%] h-full"/>
				<div class="h-full w-[23.5%]">
					<CalendarComponent />
				</div>
				<div class="w-[1.5%] h-full"/>
				<div class="h-full w-[30%]">
					<TransactionsComponent/>
				</div>
			</div>
		</article>,
	);
}
