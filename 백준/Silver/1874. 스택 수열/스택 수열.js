const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const N = input.shift()

const array = input.map(Number)

let result = []

let stack = []

let stackNum = 1

for(let i = 0; i < N; i++){
    let num = array[i]
    
    while(stackNum <= num){
        stack.push(stackNum)
        stackNum++
        result.push('+')
    }

    let stackPop = stack.pop()
    result.push('-')

    if(stackPop !== num){
        result = ['NO']
        break
    }   
}

console.log(result.join('\n'))
