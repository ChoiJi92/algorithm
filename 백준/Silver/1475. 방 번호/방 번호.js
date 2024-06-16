const input = require("fs").readFileSync("/dev/stdin").toString().trim();

let numberList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const array = input.split("").map(Number);

let count = 1;

let numberSet = [...numberList];

for (let i = 0; i < array.length; i++) {
  const findIndex = numberSet.findIndex((v) => v === array[i]);
  if (findIndex > -1) numberSet.splice(findIndex, 1);
  else {
    if (array[i] === 6 || array[i] === 9) {
      const findIndex = numberSet.findIndex(
        (v) => v === (array[i] === 6 ? 9 : 6)
      );
      if (findIndex > -1) numberSet.splice(findIndex, 1);
      else {
        numberSet.push(...numberList.filter((v) => v !== array[i]));
        count++;
      }
    } else {
      numberSet.push(...numberList.filter((v) => v !== array[i]));
      count++;
    }
  }
}

console.log(count);
