import { Handlers, PageProps }		from "$fresh/server.ts";
import { asset }					from "$fresh/runtime.ts";
import { getCookies }				from "https://deno.land/std@v0.171.0/http/cookie.ts";
import DashboardHeader				from "@/islands/DashboardHeader.tsx";
import DashboardMenu				from "@/islands/DashboardMenu.tsx";
import * as stellar					from "#/stellar.ts";
import { getUser }					from "#/db.ts";
import { checkCookieAuth }			from "#/auth.ts";
import { redirectTo, const_,
		 valuesMatch }				from "#/utils.ts";
import type { ComponentChildren }	from "preact";
//import { Chart } from "$fresh_charts/mod.ts";

// Data that the dashboard needs
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

export const handler: Handlers = {
	async GET(req, ctx) {
		const cookies = getCookies(req.headers);
		const email = await checkCookieAuth(cookies);
		if (email) {
			// As we checked the JWT, non-existence of the user is impossible
			const user = (await getUser(email))!;
			const privKey = user[0] as string;
			const name = user[2] as string;
			const keypair = stellar.Keypair.fromSecret(privKey);
			// Get the balances list
			const balances =
				await stellar.server.loadAccount(keypair.publicKey())
							 		.then(stellar.getBalances)
									.catch(const_([]))
									.then(selectBalances);
			const transactions = [false, false, true, false, true];
			return ctx.render({ name, address: keypair.publicKey(), balances, transactions });
		} else return redirectTo("/login");
	},
};

// Selects XLM and PCN balance values from the balance list
function selectBalances(balances: stellar.Balance[]): { xlm: number; pcn: number } {
	const xlm_predicate = valuesMatch({ name: "XLM", issuer: undefined });
	const pcn_predicate = valuesMatch({ name: "PCN", issuer: "GDVND3QFHQ7ZN7S7ATVIXIJFSMTFXROMOB3HXMR2OUQVU4JPUDATV3TL" }); // TODO: get the asset issuer from the config
	return {
		xlm: balances.find(xlm_predicate)?.balance ?? 0,
		pcn: balances.find(pcn_predicate)?.balance ?? 0,
	};
}

export default function Dashboard({ data }: PageProps<DashboardData>) {
	return (
		<main class="pr-8 pl-28 h-screen dark:bg-black bg-gray-bg">
			{ data.balances.xlm }<br />
			{ data.balances.pcn }
			<DashboardMenu />
			<DashboardHeader address={data.address} name={data.name} />
			{/* Left/Right part */}
			<div class="row h-[calc(100vh-8rem)] w-full gap-5 children:(w-full h-full)">
				{/* Left Top/Bottom part */}
				<div class="col gap-5 children:(w-full h-full)">
					{/* Left Top part */}
					<div class="row children:(w-full h-full) gap-x-5">
						<DashboardEntry basis="31%" classes="dark:bg-dark-1 p-6! relative" highlighted>
							<div class="justify-between items-center p-6 m-1 mx-3 mb-6 rounded-sm row bg-yellow">
								<div>
									<div class="mb-5 font-bold text-dark-750">POLISCOIN</div>
									<span class="text-2xl font-light">221 746</span>
								</div>
								<img src={asset("/poliscoin-logo.svg")} class="h-9" />
							</div>
							<div class="mb-3 text-xs font-medium text-gray-650">Текущий баланс</div>
							<div>
								<span class="text-5xl font-light">3.4330</span>
								<span class="relative right-2 bottom-8 font-bold text-yellow">EUR</span>
							</div>
							<span class="absolute bottom-6 mt-8 text-xs font-bold">
								Годовой доход <span class="text-yellow">+12%</span>
							</span>
						</DashboardEntry>
						<DashboardEntry name="ОТПРАВИТЬ" basis="24%" classes="children:mb-3">
							<select class="p-3 lk-input" name="type">
								<option value="pcn">PCN</option>
								<option value="xlm">XLM</option>
							</select>
							<h3 class="text-xs font-bold">АДРЕС ПОЛУЧАТЕЛЯ</h3>
							<input class="p-2 lk-input" name="dest" type="text" placeholder="1Cs4wu6pu5qCZ35bSLNVzG.." />
							<span class="gap-x-2 row">
								<h3 class="text-xs font-bold leading-10">КОЛИЧЕСТВО</h3>
								<input class="p-2 w-1/2 appearance-textfield lk-input" name="amount" type="number" step="0.000001" value="0.233455" />
							</span>
							<div class="flex justify-center mt-6 w-full">
								<button class="py-1 px-8 mx-auto rounded-2xl border-2 border-yellow">ОТПРАВИТЬ</button>
							</div>
						</DashboardEntry>
						<DashboardEntry name="АКТУАЛЬНЫЕ ОБЪЕКТЫ" basis="45%">
							<RelevantObjects />
						</DashboardEntry>
					</div>
					{/* Left Bottom part */}
					<div class="flex children:(w-full h-full) flex-row gap-x-5">
						<DashboardEntry name="График PCN/XLM" basis="31%" highlighted>
						</DashboardEntry>
						<DashboardEntry basis="40%" name="КАЛЕНДАРЬ СОБЫТИЙ">
							<EventCalendar />
						</DashboardEntry>
						<DashboardEntry name="рынок" basis="32.5%" highlighted>
						</DashboardEntry>
					</div>
				</div>
				{/* Right Top/Bottom part */}
				<div class="w-full h-full col" style="flex-basis: 30%">
					{/* Right Top part */}
					<DashboardEntry name="ТРАНЗАКЦИИ" basis="65%" highlighted>
						<Transactions transactions={data.transactions} />
					</DashboardEntry>
					{/* Right Bottom part */}
					<div class="" style="flex-basis: 35%">
					</div>
				</div>
			</div>
		</main>
	);
}

function DashboardEntry({ children, name, classes, basis, highlighted }: { children: ComponentChildren; name?: string; classes?: string; basis?: string; highlighted?: boolean }) {
	return (
		<div class={`${highlighted ? "bg-white dark:bg-slate-1" : "bg-gray-card bg-gray-bg dark:bg-dark-2"}
					 pt-5 px-7 rounded-sm ${classes ?? ""}`}
			 style={`flex-basis: ${basis}`}>
			{name == undefined ? <></> : <h1 class="relative right-2 mb-4 text-xl font-light">{name}</h1>}
			{children}
		</div>
	);
}

function Transactions({ transactions }: { transactions: Transaction[] }) {
	return (
		<>
			{transactions.map((transaction) => (
				<div class="justify-between p-3 mb-5 w-full h-20 text-xs col dark:bg-slate-2">
					<div class="justify-between row">
						<span>16:23, 12 дек 2018</span>
						<span class="gap-x-2 row">
							<img src={asset(transaction ? "/incoming-arrow.svg" : "/outcoming-arrow.svg")} />
							0,009 БТД
						</span>
					</div>
					<span class="mx-2 text-gray-600">
						1PRj85hu9RXPZTzxtko9stfs6nRo1vyrQB
					</span>
				</div>
			))}
		</>
	);
}

function EventCalendar() {
	return (
		<>
			<div>
				<div class="justify-between font-light row">
					<span>
						<span class="text-4xl">14</span> ФЕВРАЛЯ
					</span>
					<span class="text-3xl">11:45</span>
				</div>
				<div class="my-3 text-sm text-gray-450">ОКОНЧАНИЕ СТРОИТЕЛЬСТВА ВИЛЛЫ</div>
				<hr class="mx-1 mb-4 text-dark-1" />
			</div>
			<div>
				<div class="justify-between font-light row">
					<span>
						<span class="text-4xl">14</span> ФЕВРАЛЯ
					</span>
					<span class="text-3xl">11:45</span>
				</div>
				<div class="my-3 text-sm text-gray-450">ОКОНЧАНИЕ СТРОИТЕЛЬСТВА ВИЛЛЫ</div>
				<hr class="mx-1 mb-4 text-dark-1" />
			</div>
		</>
	);
}

function RelevantObjects() {
	return (
		<>
			<div class="w-full scroll overflow-y-scroll h-[calc(100%-4.5rem)] children:mb-3">
				<div class="gap-x-4 items-center row">
					<img class="w-10 h-10 rounded-full" src={asset("/96.png")} />
					<span class="text-base font-light">81%</span>
					<span class="font-medium text-gray-650">Вилла в Добра Вода</span>
				</div>
				<div class="gap-x-4 items-center row">
					<img class="w-10 h-10 rounded-full" src={asset("/96.png")} />
					<span class="text-base font-light">12%</span>
					<span class="font-medium text-gray-650">Гостиница в Печурице</span>
				</div>
				<div class="gap-x-4 items-center row">
					<img class="w-10 h-10 rounded-full" src={asset("/96.png")} />
					<span class="text-base font-light">7%</span>
					<span class="font-medium text-gray-650">Ремонт квартиры в Баре</span>
				</div>
			</div>
		</>
	);
}
