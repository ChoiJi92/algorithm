const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input.shift().split(" ");
const array = input.map((v) => v.split(""));

const white = [
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
];
const black = [
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
];
const answer = [];
function whiteChess(x, y) {
  let count = 0;
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      if (array[i + x][y + j] !== white[i][j]) count++;
    }
  }
  return count;
}

function blackChess(x, y) {
  let count = 0;
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      if (array[i + x][y + j] !== black[i][j]) count++;
    }
  }
  return count;
}

for (let i = 0; i < N - 7; i++) {
  for (let j = 0; j < M - 7; j++) {
    answer.push(whiteChess(i, j));
    answer.push(blackChess(i, j));
  }
}

console.log(Math.min(...answer));
