// Database operations

import { connect } from "https://deno.land/x/redis@v0.29.1/mod.ts";
import * as bcrypt from "https://deno.land/x/bcrypt@v0.4.1/mod.ts";

const redis = await connect({
  username: "default",
  password: "zYDsmdvlqBLDCEQUAQIiYjIRLuiuA0Sk",
  hostname: "redis-11947.c1.asia-northeast1-1.gce.cloud.redislabs.com",
  port: 11947,
});

// Returns true if the user was successfully
// added, false if the user already exists
export async function addUser(email: string, name: string, hashedPassword: string, secretKey: string): Promise<boolean> {
  if (await redis.exists(email) == 0) {
    await redis.set(
      email,
      [name, hashedPassword, secretKey].join(",")
    );
    return true;
  } else {
    return false
  }
}

// TODO: Create a structure with user's data

// Returns a tuple of user's name, password hash and wallet secret key
export function getUser(email: string): Promise<[string, string, string] | undefined> {
  return redis.get(email).then($ => $!.split(",")).catch(_ => undefined) as Promise<[string, string, string] | undefined>;
}

// User exists, password is correct => true
// User exists, password is incorrect => false
// User doesn't exist => null
export async function verifyPassword(email: string, password: string): Promise<boolean | null> {
  const record = await redis.get(email);
  if (record) {
    return bcrypt.compare(password, record.split(",")[0]);
  } else {
    return null;
  }
}
