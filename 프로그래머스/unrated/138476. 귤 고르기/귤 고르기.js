function solution(k, tangerine) {
    var answer = 0;
    var obj = {};
    for (item of tangerine){
        obj[item] = obj[item] > 0 ? obj[item] + 1 : 1;
    }
    const ary = Object.values(obj).sort(function(a, b) {
        return b - a;
    })

  for (item of ary) {
    answer++;
    if (k > item) k -= item;
    else break;
  }
    return answer;
}