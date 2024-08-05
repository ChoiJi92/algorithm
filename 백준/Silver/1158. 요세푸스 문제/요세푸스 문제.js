const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ");

const [N, K] = input.map(Number);
let array = new Array(N).fill(0).map((_, i) => i + 1);

let result = [];
let current = 0;

for (let i = 0; i < N; i++) {
  const n = array.splice((current + K - 1) % array.length, 1);

  current = (current + K - 1) % (array.length + 1);
  result.push(n[0]);
}

console.log(`<${result.join(", ")}>`);
