const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const N = +input.shift();

let array = input[0].split(" ").map(Number);
let max = array[0];
for (let i = 1; i < N; i++) {
  if (array[i - 1] > 0 && array[i] + array[i - 1] > 0) {
    array[i] += array[i - 1];
  }
  if (max < array[i]) {
    max = array[i];
  }
}

console.log(max);
