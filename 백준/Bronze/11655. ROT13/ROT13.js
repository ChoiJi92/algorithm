let fs = require('fs');
const input = require('fs').readFileSync('/dev/stdin').toString();

let array = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
let array2 = array.map(v => v.toUpperCase())

const a = input.split('')
let result = ''
for(let i = 0; i < a.length; i++) {
  if(a[i] === ' ') result += ' '
  else if(parseInt(a[i]) >= 0) result += a[i]
  else if(a[i] === a[i].toLowerCase()) {
    const index = array.findIndex(v => v === a[i])
    if(index > -1) result += array[(index + 13)%26]
  }
  else {
    const index = array2.findIndex(v => v === a[i])
    if(index > -1) result += array2[(index + 13)%26]
  }
}
console.log(result)
