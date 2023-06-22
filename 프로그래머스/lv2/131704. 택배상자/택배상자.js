function solution(order) {
  var answer = 0;
  const aa = [];
  const cal = (curr) => {
    if (curr >= order.length || order[curr] !== aa[aa.length - 1]) {
      return;
    }
    answer++;
    aa.pop();
    cal(curr + 1);
  }

  for (let i = 0; i < order.length; i++) {
    if (order[answer] === i + 1) {
      answer++;
      cal(answer);
    } else {
      aa.push(i + 1);
    }
  }
  return answer;
}
