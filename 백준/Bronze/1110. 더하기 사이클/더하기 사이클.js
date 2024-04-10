let fs = require('fs');
const input = require('fs').readFileSync('/dev/stdin').toString().trim();

let a = input
let result = 0
let count = 0
while(true) {
  count++
  result = Math.floor(a / 10) + (a % 10)
  a = (a % 10)*10 + (result % 10)
  if(Number(input) === a) {
    break
  }
}
console.log(count)