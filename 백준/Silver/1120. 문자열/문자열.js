const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ");

const word1 = input[0].split("");
const word2 = input[1].split("");

const answer = [];

for (let i = 0; i <= input[1].length - input[0].length; i++) {
  const diff = word1.filter((v, index) => v !== word2[index + i]).length;
  answer.push(diff);
}

console.log(Math.min(...answer));
