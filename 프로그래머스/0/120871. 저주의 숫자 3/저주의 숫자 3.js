function solution(n) {
    var answer = 0;
    for(let i = 1; i <= n; i++){
        answer++
        while(answer % 3 === 0 || String(answer).split('').map(Number).includes(3)){
            answer++
        }
        
    }
    return answer;
}