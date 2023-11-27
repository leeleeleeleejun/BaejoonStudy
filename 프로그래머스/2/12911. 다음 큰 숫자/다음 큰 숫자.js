function solution(n) {
    var answer = n;
    const target = n.toString(2).split('').filter(item => item === '1').length;
    while(true){
        answer += 1;
        const a = answer.toString(2).split('').filter(item => item === '1').length;
        if(target === a){
            break;
        }
    }
    return answer;
}