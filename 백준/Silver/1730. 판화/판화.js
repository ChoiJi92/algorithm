const input = require('fs').readFileSync("/dev/stdin").toString().split('\n');


const n = Number(input[0])
const direction = input[1].split('')

let array = Array.from(new Array(n), () => new Array(n).fill('.'));
let x = 0
let y = 0
for(let i = 0; i < direction.length; i++) {
  if(direction[i] === 'R') {
    if(y === n-1) continue
    if(array[x][y] === '.') {
      array[x][y] = '-'
    }
    else if(array[x][y] === '|') {
      array[x][y] = '+'
    }
    if(array[x][y + 1 > n - 1 ? n - 1 : y + 1] === '.') {
      array[x][y + 1 > n - 1 ? n -1 : y + 1] = '-'
    }
    else if(array[x][y+1> n - 1 ? n-1 : y+1] === '|') {
      array[x][y+1> n - 1 ? n-1 : y+1] = '+'
    } 
    y < n - 1 && y++
  }
  else if(direction[i] === 'L') {
    if(y === 0) continue
    if(array[x][y] === '.') {
      array[x][y] = '-'
    }
    else if(array[x][y] === '|') {
      array[x][y] = '+'
    }
    if(array[x][y-1 < 0 ? 0 : y-1] === '.') array[x][y-1 < 0 ? 0 : y-1] = '-'
    else if(array[x][y-1 < 0 ? 0 : y-1] === '|') array[x][y-1 < 0 ? 0 : y-1] = '+'
    y > 0 && y--
  }
  else if(direction[i] === 'U') {
    if(x === 0) continue
    if(array[x][y] === '.') {
      array[x][y] = '|'
    }
    else if(array[x][y] === '-') {
      array[x][y] = '+'
    }
    if(array[x-1 < 0 ? 0 : x-1][y] === '.') array[x-1 < 0 ? 0 : x-1][y] = '|'
    else if(array[x-1 < 0 ? 0 : x-1][y] === '-') array[x-1 < 0 ? 0 : x-1][y] = '+'
    x > 0 && x--
  }
  else if(direction[i] === 'D') {
    if(x === n-1) continue
    if(array[x][y] === '.') {
      array[x][y] = '|'
    }
    else if(array[x][y] === '-') {
      array[x][y] = '+'
    }
    if(array[x+1 > n - 1 ? n -1 : x+1][y] === '.') array[x+1 > n - 1 ? n - 1 : x+1][y] = '|'
    else if(array[x+1 > n - 1 ? n -1 : x+1][y] === '-') array[x+1 > n - 1 ? n - 1 : x+1][y] = '+'
    x < n - 1 && x++
  }
}

console.log(array.map(v => v.join('')).join('\n'))