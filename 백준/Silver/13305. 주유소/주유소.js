const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const N = +input.shift();

const [K, P] = input.map((v) => v.split(" ").map(Number));

let sum = BigInt(0);
let current = BigInt(P[0]);
for (let i = 0; i < N - 1; i++) {
  sum += current * BigInt(K[i]);
  if (current > P[i + 1]) current = BigInt(P[i + 1]);
}

console.log(sum.toString());

