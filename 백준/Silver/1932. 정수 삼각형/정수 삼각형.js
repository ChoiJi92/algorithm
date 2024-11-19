const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const N = +input.shift();

const array = input.map((v) => v.split(" ").map(Number));

if (N === 1) return console.log(array[0][0]);

for (let i = 1; i < N; i++) {
  for (let j = 0; j < array[i].length; j++) {
    if (j === 0 || j === array[i].length - 1) {
      if (j === 0) {
        array[i][j] = array[i - 1][j] + array[i][j];
      } else {
        array[i][j] = array[i - 1][j - 1] + array[i][j];
      }
    } else {
      array[i][j] =
        Math.max(array[i - 1][j], array[i - 1][j - 1]) + array[i][j];
    }
  }
}

console.log(Math.max(...array[N - 1]));