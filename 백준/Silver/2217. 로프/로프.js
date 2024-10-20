const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const N = +input.shift();

const array = input.map(Number).sort((a, b) => a - b);

let answer = [];

for (let i = 0; i < N; i++) {
  answer.push(array[i] * (N - i));
}

console.log(Math.max(...answer));
