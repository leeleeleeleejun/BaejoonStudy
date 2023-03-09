function solution(s) {
    var answer = '';
    var ary = s.split(' ').map(Number).sort((a,b)=>a-b);
    answer += ary[0] +' '+ary[ary.length - 1]
    return answer;
}