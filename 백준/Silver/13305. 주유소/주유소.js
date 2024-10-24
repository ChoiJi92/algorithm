const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const N = +input.shift();

const [K, P] = input.map((v) => v.split(" ").map(Number));

const newP = P.slice(0, P.length - 1);
let sum = 0;
while (newP.length > 1) {
  const current = newP.shift();
  const index = newP.findIndex((v) => v < current);
  if (index === -1) {
    sum += current * K.reduce((acc, cur) => acc + cur, 0);
    break;
  } else {
    let KSum = 0;
    for (let i = 0; i < index + 1; i++) {
      KSum += K[i];
    }
    sum += current * KSum;
    K.shift();
  }
}

console.log(sum);
