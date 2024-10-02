const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const N = +input.shift();

const array = input.map(Number);
let sum = 0;
array.forEach((v, i) => {
  if (i % 2 === 0) sum += v;
  else sum -= v;
});

const firstCandy = sum / 2;
let answer = [firstCandy];

for (let i = 0; i < N - 1; i++) {
  answer.push(array[i] - answer[answer.length - 1]);
}

console.log(answer.join("\n"));
