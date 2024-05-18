const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');


const N = input.shift()

const result = []

for(let i = 0; i < N; i++) {
  let array = input[i].split('')
  let front = []
  let back = []
  for(let j = 0; j < array.length; j++) {
    if(array[j] === '<') {
      if(front.length > 0){
        back.push(front.pop())
      }
    }
    else if(array[j] === '>') {
      if(back.length > 0) {
        front.push(back.pop())
      }
    }
    else if(array[j] === '-') {
      if(front.length > 0) {
        front.pop()
      }
    }
    else {
      front.push(array[j])
    }
  }
  result.push(front.join('')+back.reverse().join(''))
}

console.log(result.join('\n'))
