const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const N = +input.shift();

const [array, M] = input;

const newArray = array
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

let hi = newArray[N - 1];
let lo = 1;
while (lo <= hi) {
  let mid = Math.floor((lo + hi) / 2);
  const sum = newArray.reduce((acc, cur) => acc + (cur <= mid ? cur : mid), 0);
  if (sum <= +M) lo = mid + 1;
  else hi = mid - 1;
}
console.log(hi);
