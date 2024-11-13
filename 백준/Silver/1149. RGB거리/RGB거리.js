const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const N = +input.shift();

const costArray = input.map((v) => v.split(" ").map(Number));
let dp = new Array(N).fill().map((_) => new Array(3).fill(0));
dp[0][0] = costArray[0][0];
dp[0][1] = costArray[0][1];
dp[0][2] = costArray[0][2];

for (let i = 1; i < N; i++) {
  dp[i][0] = Math.min(dp[i - 1][1], dp[i - 1][2]) + costArray[i][0];
  dp[i][1] = Math.min(dp[i - 1][0], dp[i - 1][2]) + costArray[i][1];
  dp[i][2] = Math.min(dp[i - 1][0], dp[i - 1][1]) + costArray[i][2];
}

console.log(Math.min(...dp[N - 1]));
