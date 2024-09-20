const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ");

const [N, L, W, H] = input.map(Number);

let result = 0;

let left = 0;
let right = Math.max(L, Math.max(W, H));
for (let i = 0; i < 57; i++) {
  let mid = (left + right) / 2;
  if (Math.floor(L / mid) * Math.floor(W / mid) * Math.floor(H / mid) >= N) {
    left = mid;
    result = mid;
  } else {
    right = mid;
  }
}
console.log(result.toFixed(9));
