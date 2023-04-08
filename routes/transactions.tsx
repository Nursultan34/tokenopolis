import { asset } from "$fresh/runtime.ts";
import TransactionsI from "@/islands/Transaction.tsx";
import dashboardScreen from "#/screenWrapper.tsx";

import { Handlers } from "$fresh/server.ts";
import { getCookies } from "https://deno.land/std@v0.171.0/http/cookie.ts";
import { assertLoggedIn } from "#/auth.ts";
import { getUser } from "#/db.ts";
import * as stellar from "#/stellar.ts";
import { mayFail } from "#/utils.ts";
import * as R from "https://deno.land/x/ramda@v0.27.2/mod.ts";

export const handler: Handlers = {
	GET: mayFail(async (req, ctx) => {
		const cookies = getCookies(req.headers);
		const email = await assertLoggedIn(cookies);
		const user = (await getUser(email))!;
		const name = user.name;
		const keypair = stellar.Keypair.fromSecret(user.wallet);
		// Get the transactions the account is involved in
		const transactions = await stellar.getTransactions(await stellar.server.loadAccount(keypair.publicKey()), 0);
		const _operations = await Promise.all(transactions.map(tx => tx.operations()));
		const infer_is_incoming = o => ({
			target: o.from === keypair.publicKey() ? o.to : o.from,
			isIncoming: o.from !== keypair.publicKey(),
			...o
		});
		const operations = R.pipe(
			R.map(R.prop("records")),
			R.flatten,
			R.filter(R.propEq("type", "payment")),
			R.map(infer_is_incoming),
			R.map(R.over(R.lensProp("asset_code"), R.defaultTo("XLM"))),
			R.map(R.pick(["asset_code", "amount", "target", "isIncoming", "created_at"])),
			R.map(R.over(R.lensProp("created_at"), d => (new Date(d)).toLocaleDateString("ru-RU")))
		)(_operations);

		return ctx.render({
			name,
			address: keypair.publicKey(),
			operations: operations,
		});
	}),
};

export default function Transactions({ data: { name, address, operations } }) {
	return dashboardScreen(
		<article class="flex flex-col">
			<div class="lg:hidden flex justify-between font-bold text-sm pb-2">
					Все транзакции<span class="text-[10px] font-normal">
						Всего <span class="text-xs font-bold"> 2345</span>
					</span>
				</div>
			<div class="row gap-x-4 mb-4">
				<div class="flex items-center lg:text-base text-sm">
					ОТ <input type="text" value="08/12/2022" class="lg:w-36 w-[92px] lg:ml-1 lg:mr-2 lg:px-6 py-2.5 text-xs lg:text-lg lg:font-medium px-3 mx-3 rounded-sm" />
					<img src={asset("/./calendar.png")} class='w-4 lg:w-6'/>
				</div>
				<div class="flex items-center lg:text-base text-sm">
					ДО <input type="text" value="24/02/23" class="lg:w-36 w-[92px] lg:ml-1 lg:mr-2 lg:px-6 py-2.5 text-xs lg:text-lg lg:font-medium px-3 mx-3 rounded-sm" />
					<img src={asset("/./calendar.png")} class='w-4 lg:w-6'/>
				</div>
			</div>
			<div class="flex items-center lg:text-base lg:pr-10 lg:gap-x-6 border-b pb-1 border-[#D1D1D1] lg:border-none mb-2 text-sm">
				<span class="text-black mr-6">ВСЕ </span>
				<span class="text-gray-dark mr-6">ИСХОДЯЩИЕ </span>
				<span class="text-gray-dark">ВХОДЯЩИЕ</span>
				<div class="lg:flex gap-x-3 items-center ml-auto text-black hidden">
					<span class="text-4xl">2345</span>
					Всего транзакций
				</div>
			</div>
			<div class="col gap-y-3 lg:pr-5 pr-4 overflow-y-scroll scrollbar">
				<TransactionsI operations={operations} />
			</div>
		</article>,
	);
}
