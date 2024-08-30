const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let [N, M] = input.shift().split(" ").map(Number);

const array = input.map((v) => v.split(" ").map(Number));

const packageMin = Math.min(...array.map((v) => v[0]));
const min = Math.min(...array.map((v) => v[1]));

let onlySet = Math.ceil(N / 6) * packageMin;
let onlyPiece = N * min;
let mix = Math.floor(N / 6) * packageMin + (N % 6) * min;

console.log(Math.min(onlySet, onlyPiece, mix));
