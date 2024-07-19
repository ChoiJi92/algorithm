const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [N, F] = input.map(Number);

const newN = Number(String(N).substring(0, String(N).length - 2) + "00");

const result = String(newN % F === 0 ? 0 : F - (newN % F)).padStart(2, 0);
console.log(result);
