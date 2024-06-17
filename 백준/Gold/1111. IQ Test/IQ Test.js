const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const N = +input.shift();
const array = input[0].split(" ").map(Number);
if (N === 1) {
  return console.log("A");
} else if (N === 2) {
  if (array[0] === array[1]) return console.log(array[0]);
  else return console.log("A");
} else {
  let a = 0;
  let b = 0;
  if (array[1] - array[0] === 0) {
    a = 1;
    b = 0;
  } else {
    a = (array[2] - array[1]) / (array[1] - array[0]);
    b = array[1] - array[0] * a;
    if ((array[2] - array[1]) % (array[1] - array[0]) !== 0)
      return console.log("B");
  }
  for (let i = 1; i < N; i++) {
    if (array[i - 1] * a + b !== array[i]) {
      return console.log("B");
    }
  }
  return console.log(array[N - 1] * a + b);
}
