// Stellar Horizon API utilities

import * as stellar from "npm:stellar-sdk";
import { AccountResponse as Account } from "npm:stellar-sdk";
import { match, P } from "npm:ts-pattern";
import { const_ } from "#/utils.ts";

// Settings
enum StellarNet {
	Test = 1,
	Public = 2
}
const net = StellarNet.Test;
const issuerKeypair = stellar.Keypair.fromSecret("SB666ZIMIDTTDDKSRL3M7BLCSSPFQUE4RS7T67HN5PCOYNWVOXVJFFA6");
const networkPassphrase = net == StellarNet.Test ? stellar.Networks.TESTNET : stellar.Networks.PUBLIC;
const transactionOptions = {
	fee: stellar.BASE_FEE,
	networkPassphrase,
};

// The way SICP JS Edition stated
export const server = new stellar.Server(
	net == StellarNet.Test
	? "https://horizon-testnet.stellar.org"
	: "https://horizon.stellar.org"
);

// Reexports some of the stellar-sdk library's stuff
export { AccountResponse as Account } from "npm:stellar-sdk";
export { Keypair } from "npm:stellar-sdk";
export type Balance = { name: "XLM"; balance: number } | { name: string; balance: number; issuer: string };

export const randomKeypair = () => stellar.Keypair.random();
const assetFromName = (name: string) => new stellar.Asset(name, issuerKeypair.publicKey());

// Takes the result of server.loadAccount and returns the balance list (see the Balance type)
export function getBalances(account: Account): Balance[] {
	return account.balances.map((b): Balance | undefined =>
		// @ts-ignore _
		match(b)
			.with({ asset_type: "native" }, b => ({
				name: "XLM",
				balance: parseFloat(b.balance)
			}))
			.with({ asset_code: P._ }, b => ({
				name: b.asset_code,
				issuer: b.asset_issuer as string,
				balance: parseFloat(b.balance)
			}))
			.otherwise(const_(undefined)))
		.filter((x) => x != undefined) as Balance[];
}

const transactionFor = async (keypair: stellar.Keypair) =>
	new stellar.TransactionBuilder(await server.loadAccount(keypair.publicKey()), transactionOptions);

export async function setTrust(asset: string, target: stellar.Keypair) {
	const transaction = (await transactionFor(target))
		.addOperation(
			stellar.Operation.changeTrust({
				asset: assetFromName(asset),
			})
		)
		.setTimebounds(0, 0)
		.build();
	transaction.sign(target);
	return server.submitTransaction(transaction);
}

export async function sendTokens(asset: string, destination: string, amount: string) {
	const transaction = (await transactionFor(issuerKeypair))
		.addOperation(
			stellar.Operation.payment({
				amount,
				destination,
				asset: assetFromName(asset),
			})
		)
		.setTimebounds(0, 0)
		.build();
	transaction.sign(issuerKeypair);
	return server.submitTransaction(transaction);
}

//console.log(server)
//await setTrust("PCN", stellar.Keypair.fromSecret("SDLMZOVGJNEUOXFGYW2AEQSWXSP4YVQ5XMRYUJA6VO6ZKRIQFDXXI47I"));
//await sendTokens("PCN", "GACKI2ROZIK3H4ORY6W3J4IQ5W33JGDC4KM6PZ6JPNYRXWXF47GZFZMN", "10.0");
