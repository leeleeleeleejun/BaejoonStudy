function solution(num, total) {
  var answer = [];
  const standard = total / num;
  let a = Math.floor(standard);
  let b = Math.floor(standard);

  answer.push(Math.floor(standard));
  if (Number.isInteger(standard)) {
    for (let i = 0; i < (num - 1) / 2; i++) {
      answer.unshift(--a);
      answer.push(++b);
    }
  } else {
    for (let i = 0; i < (num - 1) / 2; i++) {
      answer.unshift(--a);
      answer.push(++b);
    }
    answer.shift();
  }

  return answer;
}
