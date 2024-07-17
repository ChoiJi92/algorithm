const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const array = input.map(Number);

const findIndex = array.findIndex((v) => !isNaN(v));

const answer = array[findIndex] + (3 - findIndex);

if (answer % 15 === 0) console.log("FizzBuzz");
else if (answer % 3 === 0) console.log("Fizz");
else if (answer % 5 === 0) console.log("Buzz");
else console.log(answer);
