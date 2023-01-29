const { sha256 } = require("ethereum-cryptography/sha256");

const { toHex, utf8ToBytes } = require("ethereum-cryptography/utils");

const a = "apple";
const b = "banana";

const aBytes = utf8ToBytes(a);
const bBytes = utf8ToBytes(b);
console.log(`abytes: ${aBytes}`);
console.log(`bbytes: ${bBytes}`);
const aHash = sha256(aBytes);
console.log(`aHash:${aHash} `);

const bHash = sha256(bBytes);
console.log(`bHash:${bHash} `);
console.log(toHex(aHash));
console.log(toHex(aHash) === toHex(aHash)); // true
console.log(toHex(aHash) === toHex(bHash)); // false
