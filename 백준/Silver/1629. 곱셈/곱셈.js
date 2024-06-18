const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ");

const [A, B, C] = input.map(BigInt);

const power = (a, b) => {
  if (b === 1n) {
    return a % C;
  } else if (b % 2n === 0n) {
    let even = power(a, b / 2n) % C;
    return (even * even) % C;
  } else {
    let odd = power(a, (b - 1n) / 2n) % C;
    return (((odd * odd) % C) * a) % C;
  }
};

console.log(String(power(A, B)));
