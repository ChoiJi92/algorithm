const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');


const N = Number(input.shift())
const array = input.map(v => v.split(' ').map(Number))
const dp = new Array(N).fill(0)

for(let i = 0; i < N; i++) {
  const [duration, profit] = array[i]
  if(i + duration > N) {
    continue
  }
  dp[i] += profit
  for(let j = i + duration; j < N; j++) {
    dp[j] = Math.max(dp[j], dp[i])
  }
}
console.log(Math.max(...dp))