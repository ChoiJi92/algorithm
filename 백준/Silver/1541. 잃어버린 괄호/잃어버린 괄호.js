let input = require("fs").readFileSync("/dev/stdin").toString().trim();

const array = input.split("");

let num = "";
let minus = false;
let answer = [];
for (let i = 0; i < array.length; i++) {
  if (array[i] !== "-") {
    num += array[i];
  } else {
    const sumNum = num
      .split("+")
      .map(Number)
      .reduce((acc, cur) => acc + cur, 0);
    answer.push(minus ? -sumNum : sumNum);
    num = "";
    minus = true;
  }
}
if (num !== "") {
  const sumNum = num
    .split("+")
    .map(Number)
    .reduce((acc, cur) => acc + cur, 0);
  answer.push(minus ? -sumNum : sumNum);
}

console.log(answer.reduce((acc, cur) => acc + cur, 0));
