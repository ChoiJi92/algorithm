const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const N = +input.shift();

let array = input.map(Number);
let count = 0;

let max = Math.max(...array);
let index = array.findIndex((v) => v === max);
let filter = array.filter((v) => v === max).length;

while (index !== 0) {
  array[index] = array[index] - 1;
  array[0] = array[0] + 1;
  count++;
  max = Math.max(...array);
  index = array.findIndex((v) => v === max);
  filter = array.filter((v) => v === max).length;
}
if (index === 0 && filter !== 1) {
  count++;
}
console.log(count);
