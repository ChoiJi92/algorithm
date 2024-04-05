let fs = require('fs');
// 입력값이 하나일 때
const input = require('fs').readFileSync(0).toString().trim();

const a = input.split('')
const array = new Array(26).fill(0)

a.forEach(v => {
  if(v === 'a') array[0] +=1
  else if(v === 'b') array[1] +=1
  else if(v === 'c') array[2] +=1
  else if(v === 'd') array[3] +=1
  else if(v === 'e') array[4] +=1
  else if(v === 'f') array[5] +=1
  else if(v === 'g') array[6] +=1
  else if(v === 'h') array[7] +=1
  else if(v === 'i') array[8] +=1
  else if(v === 'j') array[9] +=1
  else if(v === 'k') array[10] +=1
  else if(v === 'l') array[11] +=1
  else if(v === 'm') array[12] +=1
  else if(v === 'n') array[13] +=1
  else if(v === 'o') array[14] +=1
  else if(v === 'p') array[15] +=1
  else if(v === 'q') array[16] +=1
  else if(v === 'r') array[17] +=1
  else if(v === 's') array[18] +=1
  else if(v === 't') array[19] +=1
  else if(v === 'u') array[20] +=1
  else if(v === 'v') array[21] +=1
  else if(v === 'w') array[22] +=1
  else if(v === 'x') array[23] +=1
  else if(v === 'y') array[24] +=1
  else if(v === 'z') array[25] +=1
})

console.log(array.join(' '))