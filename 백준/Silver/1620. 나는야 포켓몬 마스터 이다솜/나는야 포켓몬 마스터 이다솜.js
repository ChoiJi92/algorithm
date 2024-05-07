const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, M] = input.shift().split(' ').map(Number)

const array = input.splice(0, N)

const num = new Map()
const name = new Map()

for(let i = 0; i < N; i++) {
  num.set(i+1, array[i])
  name.set(array[i], i+1)
}

let result = []

for(let i = 0; i < input.length; i++) {
  if(+input[i] >= 0) {
    result.push(num.get(+input[i]))
  }
  else {
    result.push(name.get(input[i]))
  }
}

console.log(result.join('\n'))