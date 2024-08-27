const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const N = input.shift();

const mapInput = input.map((v) => v.split("")[0]);

let result = {};

for (let i = 0; i < mapInput.length; i++) {
  if (result[mapInput[i]]) {
    result[mapInput[i]] = result[mapInput[i]] + 1;
  } else {
    result[mapInput[i]] = 1;
  }
}

let answer = [];

for (let word in result) {
  if (result[word] >= 5) answer.push(word);
}

console.log(answer.length !== 0 ? answer.sort().join("") : "PREDAJA");
