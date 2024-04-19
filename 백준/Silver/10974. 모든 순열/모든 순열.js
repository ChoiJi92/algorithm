let fs = require('fs');
const input = require('fs').readFileSync('/dev/stdin').toString().trim();

let a = Number(input)
const result = []

const solve = (array) => {
  if(array.length === a){
    result.push(array.join(' '))
    return
  }
  else{
    for(let i  = 1; i <= a; i++){
      if(!array.includes(i)){
        array.push(i)
        solve(array)
        array.pop()
      }
    }
  }
}
solve([])
console.log(result.join('\n'))