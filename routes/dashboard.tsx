import { Handlers, PageProps } from "$fresh/server.ts";
import { getCookies } from "https://deno.land/std@v0.171.0/http/cookie.ts";
import * as stellar from "#/stellar.ts";
import { getUser } from "#/db.ts";
import { checkCookieAuth } from "#/auth.ts";
import { asset } from "$fresh/runtime.ts";
import NightThemeSwitcher from "@/islands/NightThemeSwitcher.tsx";
import { redirectTo } from "#/utils.ts";
import { Chart } from "$fresh_charts/mod.ts";
import type { ComponentChildren } from "preact";
import { Header } from "../components/generalComponents/Header.tsx";
import { SideMenu } from "../components/generalComponents/SideMenu.tsx";
import { DashboardComponent } from "../components/DashBoardComponent/DashboardComponent.tsx";

type Transaction = boolean[];
interface DashboardData {
	name: string;
	address: string;
	transactions: Transaction[];
	balances: {
		xlm: number;
		pcn: number;
	};
}

export default function Dashboard({ data }: PageProps<DashboardData>) {
	return (
		<main class="h-screen w-screen dark:bg-black" style={{ overflowY: "hidden", backgroundColor: "#F0F0F0", position: "fixed" }}>
			<div className="w-full h-[10%]" style={{ display: "flex", flex: 0.5 }}>
				<Header />
			</div>
			<div className="w-full h-[90%]" style={{ display: "flex", flex: 10 }}>
				<SideMenu>
					<DashboardComponent />
				</SideMenu>
			</div>
		</main>
	);
}
