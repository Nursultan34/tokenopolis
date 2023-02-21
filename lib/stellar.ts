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

export type Balance = { name: "XLM", balance: number } | { name: string, balance: number, issuer: string };
export function getBalances(account: Account): Balance[] {
  return account.balances.flatMap(b => {
    if (b.asset_type == "native") {
      return [{
        name: "XLM",
        balance: b.balance
      }]
    } else {
      if (b.asset_code) {
        return [{
          name: b.asset_code,
          issuer: b.asset_issuer as string,
          balance: b.balance,
        }];
      } else { return [] }
    }
  });
}
