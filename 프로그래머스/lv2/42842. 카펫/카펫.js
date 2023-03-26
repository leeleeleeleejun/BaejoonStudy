function solution(brown, yellow) {
    var answer = [];
    const a = brown + yellow;
    for(let i = 1; i <= Math.sqrt(yellow); i++){
        if((yellow / i + 2) * (i + 2) === a){
            answer.push(yellow / i + 2);
            answer.push(i + 2);
            
        }
    }
    return answer;
}