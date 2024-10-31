const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const N = +input;

let count = 1;
let num = 666;

while (count < N) {
  num++;
  if (String(num).includes("666")) {
    count++;
  }
}
console.log(num);
