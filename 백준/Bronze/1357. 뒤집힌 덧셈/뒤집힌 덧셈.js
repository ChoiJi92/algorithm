const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ");

const [A, B] = input;

const sum =
  Number(A.split("").reverse().join("")) +
  Number(B.split("").reverse().join(""));
console.log(Number(String(sum).split("").reverse().join("")));
