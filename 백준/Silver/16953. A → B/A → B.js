const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ");

let [A, B] = input;

let count = 1;

while (Number(A) < Number(B)) {
  if (B.at(-1) === "1") {
    B = B.slice(0, B.length - 1);
    count++;
  } else {
    B = String(Number(B) / 2);
    count++;
  }
}

console.log(A === B ? count : -1);
