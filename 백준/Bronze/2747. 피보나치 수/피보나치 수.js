let fs = require('fs');
const input = require('fs').readFileSync('/dev/stdin').toString().trim();

let result = [0,1]

for(let i = 2; i <= Number(input); i++) {
  result.push(result[i-2] + result[i -1])
}

console.log(result[result.length-1])