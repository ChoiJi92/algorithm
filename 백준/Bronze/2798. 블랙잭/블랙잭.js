let fs = require('fs');
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const a = Number(input[0].split(' ')[1])
const array = input[1].split(' ')
const result = []
for(let i = 0; i < array.length; i++) {
  for(let j = i+1; j < array.length; j++) {
    for(let k = j+1; k < array.length; k++) {
      result.push(Number(array[i]) + Number(array[j]) + Number(array[k]))
    }
  }
}
console.log(Math.max(...(result.filter(v => Number(v) <= a))))