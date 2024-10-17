const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const N = +input.shift();

const array = input.map((v) => v.split(" ").map(Number));

const sortArray = array.sort((a, b) => a[0] - b[0]).sort((a, b) => a[1] - b[1]);

let answer = [array[0]];

for (let i = 1; i < N; i++) {
  if (answer[answer.length - 1][1] <= sortArray[i][0]) {
    answer.push(sortArray[i]);
  }
}

console.log(answer.length);
