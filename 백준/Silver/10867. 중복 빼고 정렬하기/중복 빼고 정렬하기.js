const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const N = +input.shift();

const array = input[0].split(" ").map(Number);

console.log([...new Set(array)].sort((a, b) => a - b).join(" "));
