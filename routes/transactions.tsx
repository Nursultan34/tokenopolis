import { asset } from "$fresh/runtime.ts";
import Transaction from "@/islands/Transaction.tsx";
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
		const operations = R.pipe(
			R.map(R.prop("records")),
			R.flatten,
			R.filter(R.propEq("type", "payment")),
			R.map(R.pick(["type", "from", "to", "amount", "asset_code", "asset_issuer", "transaction_hash"])),
			R.over(R.lensProp("asset_code"), R.defaultTo("XLM")),
		)(_operations);

		return ctx.render({
			name,
			address: keypair.publicKey(),
			transactions,
		});
	}),
};

export default function Transactions({ name, address, transactions }) {
	return dashboardScreen(
		<article>
			<div class="row gap-x-4 mb-1">
				<div class="flex items-center text-4">
					ОТ <input type="text" value="08/12/2022" class="w-36 mx-1 px-6 py-2.5" />
					<img src={asset("/./calendar.png")} />
				</div>
				<div class="flex items-center">
					ДО <input type="text" value="24/02/23" class="w-32 mx-1 px-6 py-2.5" />
					<img src={asset("/./calendar.png")} />
				</div>
			</div>
			<div class="flex items-center pr-10 gap-x-6">
				<span class="text-black">ВСЕ</span>
				<span class="text-gray-main">ИСХОДЯЩИЕ</span>
				<span class="text-gray-main">ВХОДЯЩИЕ</span>
				<div class="flex gap-x-3 items-center ml-auto text-black">
					<span class="text-4xl">2345</span>
					Всего транзакций
				</div>
			</div>
			<div class="col gap-y-3 pr-5 overflow-y-scroll scrollbar">
				{transactions.map(Transaction)}
			</div>
		</article>,
	);
}
