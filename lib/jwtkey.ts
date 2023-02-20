import skey from "../jwtkey.json" assert { type: "json" };

/// Generating the key
// export const JWTKey = await crypto.subtle.generateKey(
//   { name: "HMAC", hash: "SHA-512" },
//   true,
//   ["sign", "verify"],
// );

/// Saving the key
// const skey = await crypto.subtle.exportKey("jwk", JWTKey);
// await Deno.writeTextFile("jwtkey.json", JSON.stringify(skey));

// The example of loading the key (mind the JSON import statement on the 1st line);
export const JWTKey = await crypto.subtle.importKey(
  "jwk",
  skey,
  { name: "HMAC", hash: "SHA-512" },
  true,
  ["sign", "verify"],
);
