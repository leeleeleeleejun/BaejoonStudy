function solution(num, k) {
    var answer = String(num).split('').map(Number).indexOf(k);
    
    return answer >= 0 ? answer + 1 : answer;
}