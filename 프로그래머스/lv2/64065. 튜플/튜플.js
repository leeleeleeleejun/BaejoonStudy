function solution(s) {
  var answer = new Set();
  const a = s
    .substring(2, s.length - 2)
    .split('},{')
    .map((item) => item.split(',').map(Number))
    .sort((a, b) => a.length - b.length);
  for (let i = 0; i < a.length; i++) {
      const curr = (a[i])
    for(let j = 0; j < curr.length; j++){
        answer.add(curr[j]);
    }
  }
  return [...answer];
}
