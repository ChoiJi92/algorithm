let input = require("fs").readFileSync("/dev/stdin").toString().trim();

let dp = [1, 3];

for (let i = 2; i < +input; i++) {
  dp.push((dp[i - 1] + dp[i - 2] * 2) % 10007);
}

console.log(dp[+input - 1]);
