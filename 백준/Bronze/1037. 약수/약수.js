const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const N = input.shift();
const array = input[0]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

console.log(array[0] * array[N - 1]);
