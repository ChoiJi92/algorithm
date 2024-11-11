const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const T = +input.shift();

let first = new Array(15).fill(0).map((_, i) => i);
let dp = [first];
let newArray = [];
let array = [];
input.forEach((v, i) => {
  if (i % 2 === 0) {
    array[0] = Number(v);
  } else {
    array[1] = Number(v);
    newArray.push(array);
    array = [];
  }
});
for (let i = 0; i < T; i++) {
  let [k, n] = newArray[i];
  for (let i = 1; i <= k; i++) {
    if (!dp[i]) {
      let array = new Array(15)
        .fill(0)
        .map((_, j) =>
          dp[i - 1].slice(0, j + 1).reduce((acc, cur) => acc + cur, 0)
        );
      dp.push(array);
    }
  }
  console.log(dp[k][n]);
}
