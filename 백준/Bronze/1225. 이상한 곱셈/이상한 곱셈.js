const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ");

const [A, B] = input.map((v) => v.split(""));

let sum = 0;

for (let i = 0; i < A.length; i++) {
  for (let j = 0; j < B.length; j++) {
    sum += Number(A[i]) * Number(B[j]);
  }
}

console.log(sum);
