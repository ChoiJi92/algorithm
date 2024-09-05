let input = require("fs").readFileSync("/dev/stdin").toString().trim();

let n = 0;

let max = 0;
while (max < Number(input)) {
  n++;
  max = max + n;
}

let a = 0;
let b = 0;

if (n % 2 === 0) {
  // n이 짝수일 때
  a = n - (max - input);
  b = n + 1 - a;
} else {
  // n이 홀수일 때
  b = n - (max - input);
  a = n + 1 - b;
}

console.log(`${a}/${b}`);
