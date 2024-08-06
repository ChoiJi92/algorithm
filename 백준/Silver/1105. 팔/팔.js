const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ");

const [L, R] = input;

if (L.length < R.length) return console.log(0);

const arrayL = L.split("");
const arrayR = R.split("");

let count = 0;

for (let i = 0; i < R.length; i++) {
  if (arrayL[i] === arrayR[i] && Number(arrayR[i]) === 8) count++;
   else if (arrayL[i] !== arrayR[i]) {
    break;
  }
}

console.log(count);