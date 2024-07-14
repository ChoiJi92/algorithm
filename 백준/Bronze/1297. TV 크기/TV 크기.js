const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ");

const [D, H, W] = input.map(Number);

const h = Math.sqrt((H ** 2 * D ** 2) / (W ** 2 + H ** 2));
const w = (h * W) / H;

console.log(Math.floor(h), Math.floor(w));
