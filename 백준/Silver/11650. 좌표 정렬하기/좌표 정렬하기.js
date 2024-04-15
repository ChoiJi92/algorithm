let fs = require('fs');
const input = require('fs').readFileSync(0).toString().trim().split('\n');

input.shift()
let result = input.sort((a,b) => a.split(' ')[1] - b.split(' ')[1]).sort((a,b) => a.split(' ')[0] - b.split(' ')[0])
console.log(result.join('\n'))
