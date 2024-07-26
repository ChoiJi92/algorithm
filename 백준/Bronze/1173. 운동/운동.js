const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ");

const [N, m, M, T, R] = input.map(Number);

// 운동 N분 맥박 m(초기맥박)보다 낮아지면 안됨 M보다 크면안됨 T는 1분에 늘어나는 맥박 R은 1분에 줄어드는 맥박

let result = 0;

let count = 0;

let heart = m;

if (m + T > M) return console.log(-1);

while (count !== N) {
  if (heart < m) {
    heart += T;
    count++;
  } else if (heart + T > M) {
    heart = heart - R < m ? m : heart - R;
  } else if (m <= heart + T && heart + T <= M) {
    heart += T;
    count++;
  }
  result++;
}

console.log(result);
