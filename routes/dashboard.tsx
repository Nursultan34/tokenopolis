import { asset } from "$fresh/runtime.ts";
import { Handlers, PageProps } from "$fresh/server.ts";
import screenWrapper from "@/lib/screenWrapper.tsx";
import RelevantObjects from "@/components/dashboard/RelevantObjects.tsx";
import Calendar from "@/components/dashboard/Calendar.tsx";
import MyObjects from "@/components/dashboard/MyObjects.tsx";
import Transactions from "@/components/dashboard/Transactions.tsx";
import Wallet from "@/components/dashboard/Wallet.tsx";

import { getCookies } from "https://deno.land/std@v0.171.0/http/cookie.ts";
import { checkCookieAuth } from "#/auth.ts";
import { getObjects, getUser } from "#/db.ts";
import * as stellar from "#/stellar.ts";
import { const_, getFstImage, redirectTo } from "#/utils.ts";

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
	numberObject: "40494",
	objectName: "Montenegro, Soho komleks",
	objectLocate: "Tivat 85320, Montenegro",
};

const testObjectToken: ITokenObject = {
	tokenImage: "https://pngicon.ru/file/uploads/ikonka-bitkoin.png",
	tokenName: "ALFATOKEN",
	minXlm: "min 8XLM",
	payCount: 135,
};

export const handler: Handlers = {
	async GET(req, ctx) {
		const cookies = getCookies(req.headers);
		const email = await checkCookieAuth(cookies);
		if (email) {
			// As we checked the JWT, non-existence of the user is impossible
			const user = (await getUser(email))!;
			console.log(user);
			const name = user.name;
			console.log(user.wallet);
			const keypair = stellar.Keypair.fromSecret(user.wallet);
			// Get the balances list
			const balances = await stellar.server.loadAccount(keypair.publicKey())
				.then(stellar.getBalances)
				.catch(const_([]));
			const objects = (await getObjects())
				.map((o) => ({
					img: asset(getFstImage("objects", o.id)),
					tokenImg: asset(getFstImage("tokens", o.tokenName)),
					...o,
				}));
			return ctx.render({
				name,
				valXLM: 600,
				valEUR: 1234,
				address: keypair.publicKey(),
				balances: [
					{ name: "POLISVILLA", img: "img.png", valXLM: 100, valEUR: 69 },
				],
				relevantObjects: objects,
			});
		} else return redirectTo("/login");
	},
};

export default function Dashboard({ data }: PageProps<any>) {
	return screenWrapper(
		<article class="h-full w-full flex-col" style={{ overflowY: "hidden" }}>
			<div class="flex h-[53%] w-full">
				<div class="h-full w-[68.5%] bg-white-light">
					<RelevantObjects objects={data.relevantObjects} />
				</div>
				<div class="h-full w-[1.5%]" />
				<div class="h-full w-[30%]">
					<Wallet />
				</div>
			</div>
			<div class="h-[2.5%] w-full" />
			<div class="flex h-[45%] w-full">
				<div class="h-full w-[43.5%]">
					<MyObjects testObjectInfo={testObjectInfo} testObjectToken={testObjectToken} />
				</div>
				<div class="w-[1.5%] h-full" />
				<div class="h-full w-[23.5%]">
					<Calendar />
				</div>
				<div class="w-[1.5%] h-full" />
				<div class="h-full w-[30%]">
					<Transactions />
				</div>
			</div>
		</article>,
		data.address,
		data.name,
	);
}
