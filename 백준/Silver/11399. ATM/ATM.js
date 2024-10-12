const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

input.shift();

const array = input[0].split(" ").sort((a, b) => a - b).map(Number);

let answer = [];
let count = 0;
array.forEach((v) => {
  count += v;
  answer.push(count);
});

console.log(answer.reduce((acc, cur) => acc + cur, 0));
