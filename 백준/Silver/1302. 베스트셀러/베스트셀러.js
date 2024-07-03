const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const N = +input.shift();

let result = {};
let array = input.sort();

for (let i = 0; i < N; i++) {
  result[array[i]] = result[array[i]] + 1 || 1;
}
const max = Math.max(...Object.values(result));
console.log(Object.keys(result).find((key) => result[key] === max));
