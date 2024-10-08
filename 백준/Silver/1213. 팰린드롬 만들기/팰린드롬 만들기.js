let input = require("fs").readFileSync("/dev/stdin").toString().trim();
const array = input.split("").sort();

const [head, body] = [[], []];

while (array.length) {
  const word = array.shift();
  const index = array.indexOf(word);
  if (index === -1) {
    body.push(word);
  } else {
    head.push(word);
    array.splice(index, 1);
  }
}
if (body.length > 1) {
  return console.log("I'm Sorry Hansoo");
}
const tail = [...head].reverse().join("");
const answer = head.join("") + body.join("") + tail;

console.log(answer);
