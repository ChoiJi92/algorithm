const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const N = +input.shift();

console.log(
  [...new Set(input)]
    .sort((a, b) => a.length - b.length || a.localeCompare(b))
    .join("\n")
);
