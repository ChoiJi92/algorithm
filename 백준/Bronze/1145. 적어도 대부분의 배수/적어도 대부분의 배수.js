const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ");

const array = input.map(Number);

let count = 1;
while (true) {
  let n = 0;
  for (let i = 0; i < array.length; i++) if (count % array[i] === 0) n++;
  if (n >= 3) break;
  count++;
}
console.log(count);
