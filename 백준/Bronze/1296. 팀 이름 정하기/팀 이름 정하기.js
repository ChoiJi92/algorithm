const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const name = input.shift();

const N = Number(input.shift());

const array = input;
const nameSplit = name.split("");
const nameLcount = nameSplit.filter((v) => v === "L").length;
const nameOcount = nameSplit.filter((v) => v === "O").length;
const nameVcount = nameSplit.filter((v) => v === "V").length;
const nameEcount = nameSplit.filter((v) => v === "E").length;

const answer = [];

for (let i = 0; i < N; i++) {
  let L = nameLcount;
  let O = nameOcount;
  let V = nameVcount;
  let E = nameEcount;
  const wordSplit = array[i].split("");
  const wordLcount = wordSplit.filter((v) => v === "L").length;
  L += wordLcount;
  const wordOcount = wordSplit.filter((v) => v === "O").length;
  O += wordOcount;
  const wordVcount = wordSplit.filter((v) => v === "V").length;
  V += wordVcount;
  const wordEcount = wordSplit.filter((v) => v === "E").length;
  E += wordEcount;
  const result =
    ((L + O) * (L + V) * (L + E) * (O + V) * (O + E) * (V + E)) % 100;

  answer.push({ word: array[i], value: result });
}
console.log(
  answer
    .sort((a, b) => a.word.localeCompare(b.word))
    .sort((a, b) => b.value - a.value)[0].word
);
