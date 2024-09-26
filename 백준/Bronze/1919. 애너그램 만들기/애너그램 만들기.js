const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let [A, B] = input;

const wordArray = A.split("");

let Barray = B.split("");

let count = 0;

for (let i = 0; i < wordArray.length; i++) {
  const findIndex = Barray.findIndex((v) => v === wordArray[i]);
  if (findIndex > -1) {
    Barray.splice(findIndex, 1);
  } else {
    count++;
  }
}
console.log(count + Barray.length);
