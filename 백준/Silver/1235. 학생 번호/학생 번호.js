const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

input.shift();

for (let i = 1; i <= input[0].length; i++) {
  const array = input.map((v) => v.slice(v.length - i));
  const setArray = new Set(array);
  if (array.length === setArray.size) {
    console.log(i);
    break;
  }
}
