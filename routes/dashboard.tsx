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
import RelevantObjectsComponent from "@/components/dashboard/RelevantObjects.tsx";
import MyWalletComponent 		from "@/components/dashboard/MyWallet.tsx";
import CalendarComponent 		from "@/components/dashboard/Calendar.tsx";
import TransactionsComponent	from "@/components/dashboard/Transactions.tsx";
/* import { DashboardComponent } from "../components/DashBoardComponent/DashboardComponent.tsx"; */
import { tw } from 'twind';
import { css } from 'twind/css';

interface Token {
	name: string;
	img: string;
}

interface DashboardData {
	name: string;
	address: string;
	transactions: { target: string, incoming: boolean }[];
	balances: { name: string, img: string, valXLM: number, valEUR: number }[];
	relevantObjects: {
		id: number,
		name: string,
		img: string;
		token: Token,
		readiness: number,
		location: number,
		alreadyBought: number,
		minXLM: number
	};
	myObjects: {
		id: number,
		name: string
		img: string,
		token: Token,
		readiness: number,
		amount: number,
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
				{ id: 1, name: "uhh", img: "img.png", readiness: 80, token: {} }
			]
		});
	}
}

export default function Dashboard({ data }: PageProps<any>) {
	const gridStyle = css`grid-column-start: 1; grid-column-end: 3; grid-auto-rows: 50px`;
	return dashboardScreen(
		<main class="h-full w-full dark:bg-black" style={{ overflowY: "hidden", backgroundColor: "#F0F0F0", position: "fixed" }}>
			<div class="w-full h-[90%]" style={{ display: "flex", flex: 10 }}>
				<div class="grid grid-cols-3 grid-rows-2 grid-flow-row gap-4 auto-cols-max auto-rows-max w-full h-full p-5">
					<RelevantObjectsComponent objects={data.relevantObjects} />
					<MyWalletComponent balances={data.balances} balanceEUR={data.balanceEUR} balanceXLM={data.balanceXLM} />
					<div class={`${tw(gridStyle)} row`}>
						{/* <div class="row"> */}
						{/* <div style={{ display: "flex", flex: 3, backgroundColor: "red" }}> */}
							{/* <MyObjectComponent testObjectToken={testObjectToken} testObjectInfo={testObjectInfo} /> */}
							{/* </div> */}
						<div style={{ display: "flex", flex: 2, marginLeft: 15 }}>
							<CalendarComponent events={[]} />
						</div>
					</div>
					<div class="bg-white">
						<TransactionsComponent transactions={[]} />
					</div>
				</div>
			</div>
		</main>
	);
}
