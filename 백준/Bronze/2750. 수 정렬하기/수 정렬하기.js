let fs = require('fs');
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

input.shift()
const a = input.map(Number).sort((a,b) => a - b)
a.forEach(v => console.log(v))