let fs = require('fs');
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [n,...arr] = input;

const array = []
let cash = 0
for(let i = 1; i < input.length; i++){
  const inputArray = input[i].trim().split(' ')
  const a = Number(inputArray[0])
  const b = Number(inputArray[1])
  if(a === 1) {
    cash += 5000000
  }
  else if(a > 1 && a <= 3) {
    cash += 3000000
  }
  else if(a > 3 && a <= 6) {
    cash += 2000000
  }
  else if(a > 6 && a <= 10) {
    cash += 500000
  }
  else if(a > 10 && a <= 15) {
    cash += 300000
  }
  else if(a > 15 && a <= 21) {
    cash += 100000
  }
  if(b === 1) {
    cash += 5120000
  }
  else if(b > 1 && b <= 3) {
    cash += 2560000
  }
  else if(b > 3 && b <= 7) {
    cash += 1280000
  }
  else if(b > 7 && b <= 15) {
    cash += 640000
  }
  else if(b > 15 && b <= 31) {
    cash += 320000
  }
  array.push(cash)
  cash = 0
}

// console.log(array)
array.forEach((v) => console.log(v))