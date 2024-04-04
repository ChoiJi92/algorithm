let fs = require('fs');
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');

let count = 0
for(let i = 0; i < input.length; i++){
  if(Number(input[i]) === i+1) {
    count++
  }
  else if(Number(input[i]) === 8-i) {
    count--
  }
}
console.log(count === 8 ? 'ascending' : count === -8 ? 'descending': 'mixed')