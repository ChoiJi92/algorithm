let fs = require('fs');
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');

let count = 0
let array = []
let result
for(let i = 0; i < input.length; i++) {
  input.forEach((item, index) => {
    if(Number(item) === Number(input[i])) {
      count++
    }
  })
  array.push(count)
  count = 0
}

const max = Math.max(...array)
if(max === 1) {
  const maxNumber = Math.max(...(input.map((v) => Number(v))))
  result = maxNumber * 100
}
else if(max === 2) {
  const index = array.findIndex((v, i) => v === max)
  result = 1000 + Number(input[index]) * 100
}
else {
  result = 10000 + Number(input[0]) * 1000
}

console.log(result)
