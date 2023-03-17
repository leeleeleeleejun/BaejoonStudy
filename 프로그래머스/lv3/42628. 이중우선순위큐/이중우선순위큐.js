function solution(operations) {
  var answer = [];
  for (const itme of operations) {
      
    if (itme[0] === 'I') {
      answer.push(Number(itme.replace(/[^0-9-]/g, '')));
    } else {
      answer = answer.sort((a,b) => b-a);
      if (itme[2] === '1') {
        answer.shift();
      } else answer.pop();
    }
      answer = answer.sort((a,b) => b-a);
  }

  return answer.length === 0 ? [0,0] : [answer[0], answer[answer.length-1]];
}
