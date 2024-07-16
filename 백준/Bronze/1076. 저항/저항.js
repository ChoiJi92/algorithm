const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const color = [
  "black",
  "brown",
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "violet",
  "grey",
  "white",
];
let result = 0;
input.forEach((v, i) => {
  if (i === 0) {
    const findIndex = color.findIndex((x) => x === v);
    result = findIndex * 10;
  } else if (i === 1) {
    const findIndex = color.findIndex((x) => x === v);
    result += findIndex;
  } else {
    const findIndex = color.findIndex((x) => x === v);
    result = result * 10 ** findIndex;
  }
});

console.log(result);
