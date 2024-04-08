let fs = require('fs');
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const a = input.map(v => v.split(' '))
const length = a[0].map(Number)
const first = a[1][0].split('')
const second = a[1][1].split('')

let full = ''
const score = [3,2,1,2,4,3,1,3,1,1,3,1,3,2,1,2,2,2,1,2,1,1,1,2,2,1]
const english = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
for(let i = 0; i < Math.max(first.length, second.length); i++) {
  if(!first[i]) full += second[i]
  else if(!second[i]) full += first[i]
  else full += first[i] + second[i]
}

let init = full.split('').map(v => score[english.findIndex(x => v === x)])
let result = [] 
while(init.length > 2) {
  for(let i = 0; i < init.length - 1; i++) {
    if(init[i] + init[i + 1] >= 10) result.push((init[i] + init[i + 1]) % 10)
    else result.push(init[i] + init[i + 1])
  }
  init = result
  result = []
}

console.log(Number(init.join(''))+'%')
