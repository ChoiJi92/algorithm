const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input.shift().split(" ").map(Number);

const array = input[0].split(" ").map(Number);

let answer = 0;

for (let i = 0; i < N; i++) {
  let sum = array[i];
  if (sum === M) {
    answer++;
    continue;
  } else {
    for (let j = i + 1; j < N; j++) {
      sum += array[j];
      if (sum === M) {
        answer++;
        break;
      } else if (sum > M) {
        break;
      }
    }
  }
}

console.log(answer);
