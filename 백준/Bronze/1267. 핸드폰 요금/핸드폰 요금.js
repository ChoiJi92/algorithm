const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const N = Number(input.shift());

const array = input[0].split(" ").map(Number);

let Y = 0;
let M = 0;
for (let i = 0; i < N; i++) {
  Y += (Math.floor(array[i] / 30) + 1) * 10;
  M += (Math.floor(array[i] / 60) + 1) * 15;
}
if (Y > M) {
  return console.log(`M ${M}`);
} else if (Y < M) {
  return console.log(`Y ${Y}`);
}
if (Y === M) {
  return console.log(`Y M ${Y}`);
}
