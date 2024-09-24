const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ");

const [xA, yA, xB, yB, xC, yC] = input.map(Number);

if ((yB - yA) * (xC - xA) === (yC - yA) * (xB - xA)) {
  return console.log(-1);
}

const AB = Math.sqrt(Math.pow(xB - xA, 2) + Math.pow(yB - yA, 2));
const BC = Math.sqrt(Math.pow(xC - xB, 2) + Math.pow(yC - yB, 2));
const AC = Math.sqrt(Math.pow(xC - xA, 2) + Math.pow(yC - yA, 2));

const max = Math.max((AB + BC) * 2, (BC + AC) * 2, (AB + AC) * 2);
const min = Math.min((AB + BC) * 2, (BC + AC) * 2, (AB + AC) * 2);

console.log(max - min);
