const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const result = [];
let currentN = 0;
let change = false;
let sum = 0;

for (let i = 0; i < input.length; i++) {
  if (i === 0) {
    currentN = Number(input[i]);
  } else if (change) {
    change = false;
    currentN = Number(input[i]) + i;
  } else if (currentN === i) {
    sum = BigInt(sum) + BigInt(input[i]);
    result.push(sum);
    sum = 0;
    change = true;
  } else {
    sum = BigInt(sum) + BigInt(input[i]);
  }
}
result
  .map(String)
  .map(Number)
  .forEach((v) => {
    if (v === 0) console.log(0);
    else if (v < 0) console.log("-");
    else console.log("+");
  });
