const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const N = +input.shift();

const array = input[0].split(" ").map(Number);
const temp = input[0].split(" ").map(Number);

const sortArray = array.sort((a, b) => a - b);

let answer = [];
for (let i = 0; i < N; i++) {
  const index = sortArray.findIndex((v) => v === temp[i]);
  answer.push(index);
  sortArray[index] = 0;
}

console.log(answer.join(" "));
