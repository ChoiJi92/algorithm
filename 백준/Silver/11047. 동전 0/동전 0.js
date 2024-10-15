const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let [N, K] = input.shift().split(" ").map(Number);

const array = input.map(Number).filter((v) => v <= K);

let count = 0;

for (let i = array.length - 1; i >= 0; i--) {
  const num = Math.floor(K / array[i]);
  count += num;
  K -= array[i] * num;
  if (K <= 0) {
    break;
  }
}
console.log(count);
