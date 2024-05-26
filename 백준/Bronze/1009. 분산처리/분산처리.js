const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const T = +input.shift();

const array = input.map((v) => v.split(" ").map(Number));
let answer = [];
for (let i = 0; i < T; i++) {
  let [a, b] = array[i];
  let x = [];
  for (let j = 1; j < 5; j++) {
    x.push(a ** j % 10);
  }
  let n = x[(b % 4) - 1 < 0 ? 3 : (b % 4) - 1];
  answer.push(n === 0 ? 10 : n);
}

console.log(answer.join("\n"));

