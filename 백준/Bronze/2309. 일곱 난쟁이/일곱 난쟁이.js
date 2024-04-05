let fs = require('fs');
const input = require('fs').readFileSync(0).toString().trim().split('\n');

const a = input.map(v => Number(v))
const sum = a.reduce((acc, cur) => acc + cur,0)
let result = []
for(let i = 0; i < a.length; i++) {
  for(let j = i+1; j < a.length; j++) {
    if(sum - ((a[i]) + (a[j])) === 100) {
      result = [a[i], a[j]]
    }
  }
}
console.log((a.filter(v => !result.includes(v))).sort((a,b) => a-b).join('\n'))