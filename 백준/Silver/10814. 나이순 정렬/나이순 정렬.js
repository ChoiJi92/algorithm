const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const N = +input.shift();

const array = input.map((v) => v.split(" "));
console.log(
  array
    .sort((a, b) => a[0] - b[0])
    .map((v) => v.join(" "))
    .join("\n")
);
