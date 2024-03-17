function solution(begin, target, words) {
  var answer = 0;
  if (!words.includes(target)) return 0;

  function search(_begin, others, result) {
    if (_begin.join('') === target) {
        if(answer === 0 || result < answer){
           answer = result;
        }
        return;
    }

    for (let i = 0; i < others.length; i++) {
      let check = 0;
      for (let l = 0; l < others[i].length; l++) {
        const a = others[i].split('');
        if (_begin[l] === a[l]) {
          check++;
        }
      }
      if (check === _begin.length - 1) {
        search(
          [...others[i]],
          [...others.slice(0, i), ...others.slice(i + 1)],
          result+1
        );
      }
    }
  }

  search(begin.split(''), words, 0)
  return answer;
}
