const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let answer = []


for(let i = 0; i < input.length; i++) {
  let array = input[i].split('')
  let result = 'yes'
  let stack = []
  if(input[i] === '.') break
  for(let j = 0; j < array.length; j++) {
    if(array[j] === '(') {
      stack.push(array[j])
    }
    else if(array[j] === ')') {
      if(stack.length === 0 || stack[stack.length-1] === '[') {
        result = 'no'
        break
      }
      stack.pop()
    }
    else if(array[j] === '[') {
      stack.push(array[j])
    }
    else if(array[j] === ']') {
      if(stack.length === 0 || stack[stack.length-1] === '(') {
        result = 'no'
        break
      }
      stack.pop()
    }

  }
  if(stack.length > 0) result = 'no'
  answer.push(result)
}

console.log(answer.join('\n'))