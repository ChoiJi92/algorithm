let fs = require('fs');
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(v => v.split(' ').map(Number));

const [A, B, C] = input.shift()
let time = new Array(101).fill(0)
let result = 0
input.forEach(v => {
  const [start, end] = v
  for(let i = start; i < end; i++) {
    time[i]++
  }
})

time.forEach(v => {
  if(v === 1) result += A
  else if(v === 2) result += (B * 2)
  else if(v === 3) result += (C * 3)
})

console.log(result)
