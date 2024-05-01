const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');


const [H, W] = input.shift().split(' ').map(Number)
const array = input.map(v => v.split(''))
let result = []
for(let i = 0; i < array.length; i++) {
  let a = []
  let current = -1
  for(let j = 0; j < array[i].length; j++) {
    if(current < 0 && array[i][j] === '.') a.push(-1)
    else if(array[i][j] === 'c') {
      a.push(0)
      current = j
    }
    else if(current >= 0 && array[i][j] === '.') a.push(j - current)
  }
  result.push(a)
}
console.log(result.map(v => v.join(' ')).join('\n'))