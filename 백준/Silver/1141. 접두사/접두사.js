const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const N = Number(input.shift());

let answer = [];

for (let i = 0; i < N; i++) {
  const filterArray = input.filter((v) => v !== input[i]);
  let count = 0;
  filterArray.forEach((v) => {
    const word = v.split(input[i]);
    if (!word[0]) {
      count++;
    }
  });
  if (count === 0) {
    answer.push(input[i]);
  }
}
console.log([...new Set(answer)].length);
