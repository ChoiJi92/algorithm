const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");


const [N, T, P] = input.shift().split(" ").map(Number);

if (N === 0) return console.log(1);

const array = input[0].split(" ").map(Number);

const duplicateMap = {};

const rank = array.map((el) => {
  duplicateMap[el] = duplicateMap[el] === undefined ? 1 : duplicateMap[el] + 1;
  return [el, 0];
});

duplicateMap[T] = duplicateMap[T] === undefined ? 1 : duplicateMap[T] + 1;
rank.push([T, 1]);

rank.sort((a, b) => {
  if (a[0] == b[0]) return a[1] - b[1];
  return b[0] - a[0];
});

let grade = 0;

rank.forEach(([score, value], index) => {
  if (score === T && value === 1) {
    if (index + 1 > P) grade = -1;
    else grade = index + 1 - (duplicateMap[T] - 1);
  }
});

console.log(grade);
