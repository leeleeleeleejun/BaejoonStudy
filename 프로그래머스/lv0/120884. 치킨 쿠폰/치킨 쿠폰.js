function solution(chicken) {
    var answer =  0;
    while(chicken >= 10){
        const event = Math.floor(chicken/10);
        answer += event;
        chicken = event + chicken%10
    }
    
    return answer;
}