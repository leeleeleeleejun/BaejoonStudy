function solution(a, b) {
    var answer = 0;
    const ar = [a,b].sort((a,b) => a-b)
    for(let i = ar[0]; i <= ar[1]; i++){
        answer += i
    }
    return answer;
}