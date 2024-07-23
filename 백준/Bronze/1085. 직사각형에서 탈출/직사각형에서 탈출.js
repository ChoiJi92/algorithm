const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ");
const [x, y, w, h] = input.map(Number);

const array = [w - x, x, y, h - y];

console.log(Math.min(...array));
