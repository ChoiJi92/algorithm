let fs = require('fs');
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');


const init = input[0].split(' ')[1]
const array = input.splice(2,Number(input[1]))

let count = 0
let start = 1
let end = Number(init)
for(let i = 0; i < array.length; i++) {
  if(Number(array[i]) < start || Number(array[i]) > end) {
    if(Number(array[i]) < start) {
      count += (start - Number(array[i]))
      end -= (start - Number(array[i]))
      start = Number(array[i])
    }
    else if(Number(array[i]) > end) {
      count += (Number(array[i]) - end)
      start += (Number(array[i]) - end)
      end = Number(array[i])
    }
  }
}
console.log(count)