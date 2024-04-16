let fs = require('fs');
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

input.shift()
let array = input.filter((v,i) => (i + 1)%2 === 0).map(v => v.split(' ')).map(v => v.map(Number))
let result = []
for(i = 0; i < array.length; i++) {
  let a = array[i].map(v => v%2 === 0 ? v : v + 1)
  let count = 0
  while(!a.every(v => v === a[0])) {
    a = a.map((v,i) => v/2 + a[i === 0 ? a.length - 1 : i - 1]/2)
    a = a.map(v => v%2 === 0 ? v : v + 1)
    count++
  }
  result.push(count)
}
console.log(result.join('\n'))