const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");


const [N, M] = input.shift().split(" ").map(Number);

const max = Math.max(...input.map(Number));
const sortArray = input.map(Number).sort((a, b) => b-a);

let result = [];
for (let i = 1; i <= max; i++) {
  let count = 0;
  for (let j = 0; j < (N > M ? M : N); j++) {
    if (sortArray[j] >= i) {
      count += i;
    }
  }
  result.push(count);
}
const resultMax = Math.max(...result);
const price = result.findIndex((v) => v === resultMax) + 1;
console.log(`${price} ${resultMax}`);
