function solution(k, m, score) {
    var answer = 0;
    av = score.sort((a,b)=>b-a)
    for(let i = 0; i < av.length - (av.length%m); i++){
        if((i+1)%m===0){
            answer += av[i]*m
        }
    }
    return answer;
}