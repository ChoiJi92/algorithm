let fs = require('fs');
// 입력값이 하나일 때
const input = require('fs').readFileSync('/dev/stdin').toString().trim();

console.log(input.split('').map(Number).sort((a,b) => b-a).join(''))
