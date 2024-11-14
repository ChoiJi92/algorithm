const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const N = +input.shift();

const array = input[0].split(" ").map(Number);

const dp = new Array(N);
dp[0] = 1;

for (let i = 1; i < N; i++) {
  let max = 0;
  for (let j = 0; j <= i; j++) {
    if (array[j] < array[i]) {
      max = Math.max(max, dp[j]);
    }
  }
  dp[i] = max + 1;
}

console.log(Math.max(...dp));
