let input = require("fs").readFileSync("/dev/stdin").toString().trim();


let answer = "";
while (input.length !== 0) {
  if (input.length > 1) {
    answer =
      parseInt(input.slice(input.length - 1), 8)
        .toString(2)
        .padStart(3, "0") + answer;
  } else {
    answer = parseInt(input.slice(input.length - 1), 8).toString(2) + answer;
  }
  input = input.slice(0, input.length - 1);
}

console.log(answer);
