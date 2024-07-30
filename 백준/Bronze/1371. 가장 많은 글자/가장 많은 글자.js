const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const array = input.flatMap((v) => v.split(" ").flatMap((x) => x.split("")));

let result = {};

for (let i = 0; i < array.length; i++) {
  if (result[array[i]]) {
    result[array[i]] = result[array[i]] + 1;
  } else {
    result[array[i]] = 1;
  }
}

const max = Math.max(...Object.values(result));

const answer = Object.keys(result).filter((key) => result[key] === max);

console.log(answer.sort().join(""));
