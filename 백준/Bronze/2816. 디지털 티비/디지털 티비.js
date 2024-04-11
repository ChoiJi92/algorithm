let fs = require('fs');
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const number = Number(input[0])
input.shift()
let kbs1 = input.findIndex(v => v === 'KBS1')
let kbs2 = input.findIndex(v => v === 'KBS2')
kbs2 = kbs1 > kbs2 ? ++kbs2 : kbs2
let result = ''
for (let i = 0; i < kbs1; i++) {
  result += '1';
}
for (let i = 0; i < kbs1; i++) {
  result += '4';
}
for (let i = 0; i < kbs2; i++) {
  result += '1';
}
for (let i = 0; i < kbs2 - 1; i++) {
  result += '4';
}
console.log(result)
