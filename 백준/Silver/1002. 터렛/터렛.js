const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const N = +input.shift();
const array = input.map((v) => v.split(" ").map(Number));
for (let i = 0; i < N; i++) {
  [a, b, c, x, y, z] = array[i];
  let r = Math.sqrt((a - x) * (a - x) + (b - y) * (b - y));

  if (r === 0) {
    if (c === z) {
      console.log(-1);
    } else {
      console.log(0);
    }
  } else {
    if (r > Math.abs(c - z) && r < c + z) {
      console.log(2);
    } else if (r === c + z) {
      console.log(1);
    } else if (r > c + z) {
      console.log(0);
    } else if (r === Math.abs(c - z)) {
      console.log(1);
    } else {
      console.log(0);
    }
  }
}
