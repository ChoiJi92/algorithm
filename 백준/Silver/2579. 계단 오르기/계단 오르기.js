const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const N = +input.shift();

const array = input.map(Number);
const dp = Array(N).fill(0);
dp[0] = array[0];
dp[1] = array[0] + array[1];
dp[2] = Math.max(array[0] + array[2], array[1] + array[2]);

for (let i = 3; i < N; i++) {
  dp[i] = Math.max(dp[i - 3] + array[i - 1] + array[i], dp[i - 2] + array[i]);
}

console.log(dp[N - 1]);
