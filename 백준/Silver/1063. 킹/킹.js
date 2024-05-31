const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [K, S, N] = input.shift().split(" ");

let King = K.split("");
let Stone = S.split("");

const Alphabet = ["A", "B", "C", "D", "E", "F", "G", "H"];

for (let i = 0; i < N; i++) {
  if (input[i] === "R") {
    if (King[0] === "H") continue;
    else {
      const index = Alphabet.findIndex((v) => v === King[0]);
      const currentIndex = index + 1;
      King[0] = Alphabet[currentIndex];
      if (King[0] === Stone[0] && King[1] === Stone[1]) {
        if (Stone[0] === "H") {
          King[0] = Alphabet[index];
          continue;
        } else {
          const index = Alphabet.findIndex((v) => v === Stone[0]);
          const currentIndex = index + 1;
          Stone[0] = Alphabet[currentIndex];
        }
      }
    }
  } else if (input[i] === "L") {
    if (King[0] === "A") continue;
    else {
      const index = Alphabet.findIndex((v) => v === King[0]);
      const currentIndex = index - 1;
      King[0] = Alphabet[currentIndex];
      if (King[0] === Stone[0] && King[1] === Stone[1]) {
        if (Stone[0] === "A") {
          King[0] = Alphabet[index];
          continue;
        } else {
          const index = Alphabet.findIndex((v) => v === Stone[0]);
          const currentIndex = index - 1;
          Stone[0] = Alphabet[currentIndex];
        }
      }
    }
  } else if (input[i] === "B") {
    if (King[1] === "1") continue;
    else {
      King[1] = String(Number(King[1]) - 1);
      if (King[0] === Stone[0] && King[1] === Stone[1]) {
        if (Stone[1] === "1") {
          King[1] = String(Number(King[1]) + 1);
          continue;
        } else {
          Stone[1] = String(Number(Stone[1]) - 1);
        }
      }
    }
  } else if (input[i] === "T") {
    if (King[1] === "8") continue;
    else {
      King[1] = String(Number(King[1]) + 1);
      if (King[0] === Stone[0] && King[1] === Stone[1]) {
        if (Stone[1] === "8") {
          King[1] = String(Number(King[1]) - 1);
          continue;
        } else {
          Stone[1] = String(Number(Stone[1]) + 1);
        }
      }
    }
  } else if (input[i] === "RT") {
    if (King[0] === "H" || King[1] === "8") continue;
    else {
      const index = Alphabet.findIndex((v) => v === King[0]);
      const currentIndex = index + 1;
      King[0] = Alphabet[currentIndex];
      King[1] = String(Number(King[1]) + 1);
      if (King[0] === Stone[0] && King[1] === Stone[1]) {
        if (Stone[0] === "H" || Stone[1] === "8") {
          King[0] = Alphabet[index];
          King[1] = String(Number(King[1]) - 1);
          continue;
        } else {
          const index = Alphabet.findIndex((v) => v === Stone[0]);
          const currentIndex = index + 1;
          Stone[0] = Alphabet[currentIndex];
          Stone[1] = String(Number(Stone[1]) + 1);
        }
      }
    }
  } else if (input[i] === "LT") {
    if (King[0] === "A" || King[1] === "8") continue;
    else {
      const index = Alphabet.findIndex((v) => v === King[0]);
      const currentIndex = index - 1;
      King[0] = Alphabet[currentIndex];
      King[1] = String(Number(King[1]) + 1);
      if (King[0] === Stone[0] && King[1] === Stone[1]) {
        if (Stone[0] === "A" || Stone[1] === "8") {
          King[0] = Alphabet[index];
          King[1] = String(Number(King[1]) - 1);
          continue;
        } else {
          const index = Alphabet.findIndex((v) => v === Stone[0]);
          const currentIndex = index - 1;
          Stone[0] = Alphabet[currentIndex];
          Stone[1] = String(Number(Stone[1]) + 1);
        }
      }
    }
  } else if (input[i] === "RB") {
    if (King[0] === "H" || King[1] === "1") continue;
    else {
      const index = Alphabet.findIndex((v) => v === King[0]);
      const currentIndex = index + 1;
      King[0] = Alphabet[currentIndex];
      King[1] = String(Number(King[1]) - 1);
      if (King[0] === Stone[0] && King[1] === Stone[1]) {
        if (Stone[0] === "H" || Stone[1] === "1") {
          King[0] = Alphabet[index];
          King[1] = String(Number(King[1]) + 1);
          continue;
        } else {
          const index = Alphabet.findIndex((v) => v === Stone[0]);
          const currentIndex = index + 1;
          Stone[0] = Alphabet[currentIndex];
          Stone[1] = String(Number(Stone[1]) - 1);
        }
      }
    }
  } else if (input[i] === "LB") {
    if (King[0] === "A" || King[1] === "1") continue;
    else {
      const index = Alphabet.findIndex((v) => v === King[0]);
      const currentIndex = index - 1;

      King[0] = Alphabet[currentIndex];
      King[1] = String(Number(King[1]) - 1);

      if (King[0] === Stone[0] && King[1] === Stone[1]) {
        if (Stone[0] === "A" || Stone[1] === "1") {
          King[0] = Alphabet[index];
          King[1] = String(Number(King[1]) + 1);
          continue;
        } else {
          const index = Alphabet.findIndex((v) => v === Stone[0]);
          const currentIndex = index - 1;
          Stone[0] = Alphabet[currentIndex];
          Stone[1] = String(Number(Stone[1]) - 1);
        }
      }
    }
  }
}

console.log(King.join(""));
console.log(Stone.join(""));
