const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ");

const [S1, S2, S3] = input.map(Number);

let result = [];

for (let i = 1; i <= S1; i++) {
  for (let j = 1; j <= S2; j++) {
    for (let k = 1; k <= S3; k++) {
      const sum = i + j + k;
      const findIndex = result.findIndex((v) => v.sum === sum);
      if (findIndex > -1) {
        result[findIndex] = { sum, value: result[findIndex].value + 1 };
      } else {
        result.push({ sum, value: 1 });
      }
    }
  }
}
const max = Math.max(...result.map((v) => v.value));
const array = result.filter((v) => v.value === max);

console.log(
  array.length > 1 ? Math.min(...array.map((v) => v.sum)) : array[0].sum
);
