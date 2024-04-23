const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const number = input.shift()
const array = input.map(v => v.split(' '))
let bigRect = 0
let index = 0
for(let i = 0; i < array.length; i++) {
  let a = array[i][1]
  let b = array[(i + 1)%array.length][1]
  if(a * b > bigRect) {
    bigRect = a * b
    index = i
  }
}

let smallRect = array[(index+3)%6][1] * array[(index+4)%6][1]
console.log((bigRect - smallRect) * number)
