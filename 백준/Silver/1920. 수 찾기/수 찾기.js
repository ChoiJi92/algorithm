const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const A = input[1].split(' ').map(Number)
const M = input[3].split(' ').map(Number)

A.sort((a,b) => a-b)
let array = []
M.forEach(v => {
  let start = 0
  let end = A.length - 1
  let result = false
  while (start <= end) {
    let mid = parseInt((start + end) / 2)
    if(v < A[mid]) {
      end = mid - 1
    }
    else if(v > A[mid]) {
      start = mid + 1
    }
    else {
      result = true
      break
    }
  }
  if(result) {
    array.push(1)
  }
  else {
    array.push(0)
  }
})

console.log(array.join('\n'))