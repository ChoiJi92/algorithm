const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ");

let [X, Y] = input.map(Number);

if (X === Y) {
  console.log(-1);
} else {
  const C = Math.floor((Y * 100) / X) + 1;
  if (C === 100) {
    console.log(-1);
  } else {
    const Z = Math.ceil((C * X - 100 * Y) / (100 - C));
    console.log(Z);
  }
}
