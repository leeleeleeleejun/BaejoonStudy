function solution(n) {
    if(n === 1){
        return [1];
    }
    var answer = [1, n];
    for(let i = 2; i <= n / 2; i++){
        if(n % i == 0){
            answer.push(i);
        }
    }
    return answer.sort((a,b)=>a-b);
}