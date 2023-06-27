function solution(k, dungeons) {
  var answer = 0;
  const cal = (comb, others) => {
    if (comb.length === dungeons.length) {
      let copy = k;
      for (let i = 0; i < comb.length; i++) {
        const curr = comb[i];
        if (copy >= curr[0]) {
          copy -= curr[1];
          if (answer < i) {
            answer = i;
          }
        } else {
          break;
        }
      }
      return;
    }
    for (let i = 0; i < others.length; i++) {
      cal(
        [...comb, others[i]],
        [...others.slice(0, i), ...others.slice(i + 1)]
      );
    }
  };
  cal([], dungeons);

  return answer+1;
}