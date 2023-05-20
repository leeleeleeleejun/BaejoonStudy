function solution(n) {
    var answer = -1;
    const sqrt = Math.sqrt(n);
    const boo = Number.isInteger(sqrt);
    if(boo){
        answer = (sqrt+1)**2
    }
    return answer
}