const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const N = +input.shift();
const array = input.map(Number);

const answer = [1, 1, 1, 2, 2, 3, 4, 5, 7, 9];

for (let i = 0; i < N; i++) {
  if (answer[array[i]]) {
    console.log(answer[array[i] - 1]);
  } else {
    for (let j = answer.length; j <= array[i]; j++) {
      answer.push(answer[answer.length - 1] + answer[answer.length - 5]);
    }
    console.log(answer[array[i] - 1]);
  }
}
