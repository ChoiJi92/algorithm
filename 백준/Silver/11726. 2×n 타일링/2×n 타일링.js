let input = require("fs").readFileSync("/dev/stdin").toString().trim();

const N = +input;

let arr = [1, 2];

for (let i = 2; i < N; i++) {
  arr.push((arr[i - 1] + arr[i - 2]) % 10007);
}
console.log(arr[N - 1] % 10007);
