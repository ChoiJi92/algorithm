const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const N = +input.shift();

const numberArray = input.map(Number);
const max = Math.max(...numberArray);

let array = [0];
array[1] = 1;
array[2] = 2;
array[3] = 4;

for (let i = 4; i <= max; i++) {
  array[i] = array[i - 1] + array[i - 2] + array[i - 3];
}

numberArray.forEach((number) => {
  console.log(array[number]);
});
