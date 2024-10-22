let input = require("fs").readFileSync("/dev/stdin").toString().trim();

const S = +input;
let sum = 0;
let N = 0;

while (sum < S) {
  N++;
  sum += N;
  if (sum > S) N--;
}
console.log(N);
