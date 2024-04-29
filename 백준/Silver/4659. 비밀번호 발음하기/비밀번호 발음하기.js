const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

const vowels = ['a','e','i','o','u']

let pass
let result = []
for(let i = 0; i < input.length; i++) {
  if(input[i]=== 'end') break 
  const word = input[i].split('')
  let vowelsCount = 0
  let consonantsCount = 0
  let currentAlphabet
  let vowelsPass = false
  for(j = 0; j < word.length; j++) {
    if(vowels.includes(word[j])) {
      vowelsPass = true
      pass = true
      vowelsCount++
      consonantsCount = 0
      if(vowelsCount >= 3) { 
        pass = false
        break 
      }
      if((vowels.findIndex(v => v === word[j])+1)%2 === 1 && currentAlphabet === word[j]) {
        pass = false
        break
      }
      currentAlphabet = word[j]
    }
    else {
      if(currentAlphabet === word[j]) {
        pass = false
        break
      }
      consonantsCount++
      vowelsCount = 0
      if(consonantsCount >= 3) {
        pass = false
        break
      }
      else {
        currentAlphabet = word[j]
        pass= true
      }
    }
    if(!vowelsPass) pass = false
  }
  result.push({word: word.join(''), pass})
}


for(let i = 0; i < result.length; i++) {
  console.log(`<${result[i].word}> is ${ result[i].pass ? 'acceptable.' : 'not acceptable.' }`)
}