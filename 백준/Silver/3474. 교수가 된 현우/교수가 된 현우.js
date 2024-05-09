const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const N = Number(input.shift())

const array = input.map(Number)

const result = []
for(let i = 0; i < N; i++) {
  let a = 0
  for (let j = 5; j <= array[i]; j *= 5) {
    a += Math.trunc(array[i] / j)
  }
  result.push(a)
}

console.log(result.join('\n'))