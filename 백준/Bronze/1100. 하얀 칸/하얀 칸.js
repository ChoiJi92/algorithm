const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const array = input.map((v) => v.split(""));

let count = 0;

for (let i = 0; i < array.length; i++) {
  for (let j = 0; j < array[i].length; j++) {
    if (i === 0 || i % 2 === 0) {
      if (j === 0 || j % 2 === 0) {
        array[i][j] === "F" && count++;
      }
    } else {
      if (j % 2 === 1) {
        array[i][j] === "F" && count++;
      }
    }
  }
}
console.log(count);
