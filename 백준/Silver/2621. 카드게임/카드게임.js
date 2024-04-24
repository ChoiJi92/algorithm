const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let card = input.map(v => v.split(' '))

//* R B Y G
let colorList = [0,0,0,0]
let numberList = [0,0,0,0,0,0,0,0,0]
let result = []
let rule = false
for(let i = 0; i < card.length; i++) {
  if(card[i][0] === 'R') colorList[0]++
  else if(card[i][0] === 'B') colorList[1]++
  else if(card[i][0] === 'Y') colorList[2]++
  else if(card[i][0] === 'G') colorList[3]++
  numberList[Number(card[i][1])-1]++
}

if(Math.max(...colorList) === 5) {
  const index = numberList.findIndex(v => v>=1)
  //* 1번
  if(numberList[index] ===1 && numberList[index+1]===1 && numberList[index+2] === 1 && numberList[index+3] ===1 && numberList[index+4] === 1) {
    result.push(900 + index+5)
    rule = true
  }
  //* 4번
  else {
    let index = 0
    for(let i = 0; i < numberList.length; i++) {
      if(numberList[i] >= 1) {
        index = i + 1
      }
    }
    result.push(600 + index)
    rule = true
  }
}
//* 2번
if(numberList.findIndex(v => v === 4) >= 0 ){
  const index = numberList.findIndex(v => v === 4)
  result.push(800 + index+1)
  rule = true
}
//* 3번
if(numberList.some(v => v === 3)){
  const a = numberList.findIndex(v => v === 3) + 1
  if(numberList.some(v => v === 2)) {
    const b = numberList.findIndex(v => v===2) + 1
    result.push((a*10)+b+700)
    rule = true
  }
  //* 6번
  else {
    result.push(a + 400)
    rule = true
  }
}

//* 5번
const index = numberList.findIndex(v => v>=1)
if(numberList[index] ===1 && numberList[index+1]===1 && numberList[index+2] === 1 && numberList[index+3] ===1 && numberList[index+4] === 1) {
  result.push(500 + index+5)
  rule = true
}

if(numberList.findIndex(v => v === 2) >= 0 ) {
  let count = 0
  let num = []
  for(let i = 0; i < numberList.length; i++){
    if(numberList[i] === 2) {
      count++
      num.push(i + 1)
    }
  }
  //* 7번
  if(count >= 2) {
    const max = Math.max(...num)
    const min = Math.min(...num)
    result.push((max*10)+min+300)
    rule = true
  }
  //* 8번
  else {
    result.push(num[0] + 200)
    rule = true
  }
}
//* 9번
if(!rule){
  let count = 0
  for(let i = 0; i < numberList.length; i++){
    if(numberList[i] >= 1) {
      count = i + 1
    }
  }
  result.push(count + 100)
}

console.log(Math.max(...result))