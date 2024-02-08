const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n');
const N = +input[0];
let score = input[1].split(' ').map(val=>+val);
const maxVal = Math.max(...score);

console.log(score.map(item => item/maxVal*100).reduce((a,b)=>a+b)/score.length);
