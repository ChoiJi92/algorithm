let fs = require('fs');
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

input.shift()
const a = input.map(v => v.split(''))
let count = [0, 0]
for(let i = 0; i < a.length; i++) {
  let check = 0
  for(let j = 0; j < a.length; j++) {
    if(a[i][j] === '.') check++
    else if(a[i][j] === 'X') check = 0
    if(check === 2) {
      count[0]++
    }
}
}
for(let i = 0; i < a.length; i++) {
  let check2 = 0
  for(let j = 0; j < a.length; j++) {
    if(a[j][i] === '.') check2++
    else if(a[j][i] === 'X') check2 = 0
    if(check2 === 2) {
      count[1]++
    }
}
}
console.log(`${count[0]} ${count[1]}`)