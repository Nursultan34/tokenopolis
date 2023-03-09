import { Handlers, PageProps } from "$fresh/server.ts";
/* import { getCookies } from "https://deno.land/std@v0.171.0/http/cookie.ts";
 * import * as stellar from "#/stellar.ts";
 * import { getUser } from "#/db.ts";
 * import { checkCookieAuth } from "#/auth.ts"; */
import dashboardScreen from "@/lib/screenWrapper.tsx";
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
	return dashboardScreen(
		<main class="h-full w-full dark:bg-black" style={{ overflowY: "hidden", backgroundColor: "#F0F0F0" }}>
			<div class="w-full h-[90%]" style={{ display: "flex", flex: 10 }}>
				<div class="grid grid-cols-3 grid-rows-2 grid-flow-row gap-4 auto-cols-max auto-rows-max w-full h-full">
					<div class={`bg-black gridStyle`}>
					</div>
					<div class="bg-white-dark bg-red-light">
					</div>
					<div class={`gridStyle flex flex-row bg-yellow-light`}>
						<div style={{ display: "flex", flex: 3, backgroundColor: "red" }}>
						</div>
						<div style={{ display: "flex", flex: 2, marginLeft: 15 }}>
						</div>
					</div>
					<div class="bg-white bg-green-light">
					</div>
				</div>
			</div>
		</main>,
	);
}
