const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const T = input.shift();

const factorial = (num) => {
  if (num <= 1) return 1;
  return num * factorial(num - 1);
};

for (let i = 0; i < T; i++) {
  const [N, M] = input[i].split(" ").map(Number);
  console.log(Math.round(factorial(M) / (factorial(M - N) * factorial(N))));
}
