let input = require("fs").readFileSync("/dev/stdin").toString().trim();

if (Number(input) < 100) return console.log(input);

let count = 0;
for (let i = 100; i <= Number(input); i++) {
  const stringNumberArray = String(i).split("").map(Number);
  let right = true;
  let diff = stringNumberArray[1] - stringNumberArray[0];
  for (let i = 1; i < stringNumberArray.length - 1; i++) {
    if (diff !== stringNumberArray[i + 1] - stringNumberArray[i]) {
      right = false;
      break;
    }
  }
  if (right) {
    count++;
  }
}
console.log(count + 99);
