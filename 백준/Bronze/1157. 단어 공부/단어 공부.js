let input = require("fs").readFileSync("/dev/stdin").toString().trim();

const array = input.split("");

let result = {};

for (let i = 0; i < array.length; i++) {
  const alphabet = array[i].toLocaleUpperCase();
  if (result[alphabet]) {
    result[alphabet] = result[alphabet] + 1;
  } else {
    result[alphabet] = 1;
  }
}
const max = Math.max(...Object.values(result));
const newArray = Object.entries(result).filter((v) => v[1] === max);
if (newArray.length > 1) {
  return console.log("?");
} else {
  return console.log(newArray[0][0]);
}
