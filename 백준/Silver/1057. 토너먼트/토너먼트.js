const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ");
let [N, A, B] = input.map(Number);

let result = 0;

while (A !== B) {
  A = parseInt(A / 2 + (A % 2));
  B = parseInt(B / 2 + (B % 2));
  result++;
}

console.log(result === 0 ? -1 : result);
