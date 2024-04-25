const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const N = Number(input.shift())
const array = input

let result = []
for(let i = 0; i < array.length; i++) {
  let a = ''
  for(let j = 0; j < array[i].length; j++) {
    if(Number(array[i][j]) >= 0) a += array[i][j]
    else {
      a!=='' && result.push(BigInt(a))
      a = ''
    }
  }
  a!== '' && result.push(BigInt(a))
}

console.log(result.sort((a,b) => (a < b) ? -1 : ((a > b) ? 1 : 0)).join('\n').trim())