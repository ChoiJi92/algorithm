let fs = require('fs');
const input = require('fs').readFileSync(0).toString().trim().split(/\s/);
const [n,...arr] = input;

console.log(Math.max(...arr) - Math.min(...arr))