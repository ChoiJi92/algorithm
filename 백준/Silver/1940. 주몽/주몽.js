const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');


const N = Number(input[0])
const M = Number(input[1])

const array = input[2].split(' ').map(Number)

let count = 0
for(let i = 0; i < N; i++){
  for(let j = i + 1; j < N; j++) {
    if((array[i] + array[j]) === M) count++
  }
}
console.log(count)