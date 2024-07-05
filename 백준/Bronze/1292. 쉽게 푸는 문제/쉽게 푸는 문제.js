const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ");

const [A, B] = input.map(Number);
let arr = [0];
let num = 1;
let count = 0;
while (arr.length <= B) {
  arr.push(num);
  count++;
  if (count === num) {
    num++;
    count = 0;
  }
}
console.log(arr.slice(A, B + 1).reduce((acc, cur) => acc + cur, 0));
