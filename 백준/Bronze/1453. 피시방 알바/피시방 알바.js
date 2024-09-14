const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const N = Number(input.shift());

const array = input[0].split(" ");

let seat = [];
let count = 0;

for (let i = 0; i < N; i++) {
  if (seat.find((v) => v === array[i])) {
    count++;
  } else {
    seat.push(array[i]);
  }
}

console.log(count);
