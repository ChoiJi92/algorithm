const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const N = input.shift();

const array = input.map((v) => v.split(""));

let result = [];

for (let i = 0; i < array[0].length; i++) {
  let same = true;
  for (let j = 1; j < N; j++) {
    if (array[0][i] !== array[j][i]) {
      same = false;
    }
    if (!same) break;
  }
  if (same) {
    result.push(array[0][i]);
  } else {
    result.push("?");
  }
}

console.log(result.join(""));
