let fs = require('fs');
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(/\s/);
const [n,...arr] = input;

const result = [Number(arr[0])]
for(let i = 1; i < arr.length; i++) {
  result.push(arr[i] * (i + 1) - result.reduce((acc, curr) => acc + curr, 0))
}
console.log(result.toString().replaceAll(',', ' '))