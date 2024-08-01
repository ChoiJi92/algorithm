let input = require("fs").readFileSync("/dev/stdin").toString().trim();

let result = "";

while (input.length >= 3) {
  result = parseInt(input.slice(input.length - 3), 2).toString(8) + result;
  input = input.slice(0, input.length - 3);
}

console.log((input ? parseInt(input, 2).toString(8) : "") + result);

