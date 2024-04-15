let fs = require('fs');
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

input.shift()
let result = input.sort((a,b) => a-b)
console.log(result.join('\n'))
