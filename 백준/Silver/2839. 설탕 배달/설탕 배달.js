let input = require("fs").readFileSync("/dev/stdin").toString().trim();

let sugar = Number(input);

let five = Math.floor(sugar / 5);

let answer = -1;

while (five >= 0) {
  let remain = sugar - five * 5;
  if (remain % 3 === 0) {
    answer = remain / 3 + five;
    break;
  } else {
    five -= 1;
  }
}

console.log(answer);
