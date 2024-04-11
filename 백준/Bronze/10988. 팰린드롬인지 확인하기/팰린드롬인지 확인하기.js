let fs = require('fs');
const input = require('fs').readFileSync('/dev/stdin').toString().trim();

let result = input.split('').reverse().join('')

console.log(input === result ? 1 : 0)