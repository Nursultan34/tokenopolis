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
  return account.balances.map(b => {
    if (b.asset_type == "native") {
      return {
        name: "XLM",
        balance: parseFloat(b.balance),
      } as Balance;
    } else {
      // Why is TypeScript so fucking dumb
      // THE `asset_code` WILL EXIST ON MY TYPE IF I CHECKED ITS EXISTANCE
      // THIS FUCKING "|" TYPE OPERATOR I HATE THIS STICK SO MUCH WHY NOT
      // JUST HAVE ENUMS OR ALGEBRAIC DATA TYPES AS REGULAR PEOPLE DO
      if (b.asset_code) {
        return {
          name: b.asset_code,
          issuer: b.asset_issuer as string,
          balance: parseFloat(b.balance),
        } as Balance;
      } else { return undefined }
    }
  }).filter(x => x != undefined) as Balance[];
}
