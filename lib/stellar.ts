// Stellar Horizon API utilities

import * as stellar from "npm:stellar-sdk";
import { AccountResponse as Account } from "npm:stellar-sdk";

const server = new stellar.Server("https://horizon-testnet.stellar.org");

// Reexports some of the stellar-sdk library's stuff
export { AccountResponse as Account } from "npm:stellar-sdk";
export { Keypair } from "npm:stellar-sdk";
export const loadAccount = server.loadAccount;

export function randomKeypair() {
  return stellar.Keypair.random();
}

// FIXME
export function getBalances(account: Account): [string, number][] {
  return account.balances.map((b) => {
    return [
      b.asset_type == "native" ? "XLM" : b.asset_code,
      parseFloat(b.balance),
    ]; // TODO: handle assets without asset_code
  });
}
