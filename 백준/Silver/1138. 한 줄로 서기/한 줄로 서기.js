const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const N = Number(input.shift());
const array = input[0].split(" ").map(Number);

let result = new Array(N).fill(0);
for (let i = 1; i <= N; i++) {
  let left = array[i - 1];
  let count = 0;

  for (let j = 0; j < N; j++) {
    if (count === left && result[j] === 0) {
      result[j] = i;
      break;
    } else if (result[j] === 0) {
      count += 1;
    }
  }
}
console.log(result.join(" "));
