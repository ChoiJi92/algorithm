const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ");

const [A, B, N] = input.map(Number);

let result = A % B;

for (let i = 0; i < N - 1; i++) {
  result *= 10;
  result %= B;
}

result *= 10;
console.log(Math.floor(result / B));
