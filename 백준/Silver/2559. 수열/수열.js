const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [N, K] = input.shift().split(" ").map(Number);

const array = input[0].split(" ").map(Number);

let result = [];

if (N === K) result.push(array.reduce((acc, cur) => acc + cur, 0));
else if (K === 1) result = array;
else {
  for (let i = 0; i < N - 1; i++) {
    let sum = array[i];
    let count = 1;
    if (i + K > N) break;
    for (let j = i + 1; j < N; j++) {
      sum += array[j];
      count++;
      if (count === K) break;
    }
    result.push(sum);
  }
}

console.log(Math.max(...result));
