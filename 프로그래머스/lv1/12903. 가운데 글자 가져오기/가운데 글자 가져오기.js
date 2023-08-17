function solution(s) {
    var answer = '';
    if(s.length % 2 === 0){
        const curr = s.length / 2;
        answer+= s[curr-1];
        answer+= s[curr];
    }else{
        const curr = Math.floor(s.length / 2);
        answer+= s[curr];
    }
    return answer;
}