const input = require("fs").readFileSync("/dev/stdin").toString().trim();

const N = Number(input);

let answer = BigInt(0);
for (let i = 1; i <= N - 1; i++) {
  answer += BigInt(N * i + i);
}

console.log(String(answer));
