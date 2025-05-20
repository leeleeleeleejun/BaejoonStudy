const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input;

rl.on("line", (line) => {
  input = line;
}).on("close", () => {
  let X = +input;
  let answer = 0;
  while (X > 0) {
    if (X % 2) answer++;
    X = parseInt(X / 2);
  }
  answer = answer <= 0 ? 1 : answer;
  console.log(answer);
});