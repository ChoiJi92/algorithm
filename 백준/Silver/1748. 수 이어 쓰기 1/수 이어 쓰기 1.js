const input = require('fs').readFileSync('/dev/stdin').toString().trim();

const N = Number(input)

let answer = 0
for(let i = 0; i < input.length; i++) {
  if(i === input.length - 1) {
    answer += ((N - (10 ** (i))) + 1) * (i + 1)
  }
  else {
    answer += (((10 ** (i+1) - (10 ** i)) * (i+1)))
  }
}

console.log(answer)