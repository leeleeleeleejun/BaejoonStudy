function solution(s) {
    var answer = [];
    const obj = {};
    s = s.split('');
    for(let i = 0; i < s.length; i++){
        if(obj[s[i]] >= 0){
            answer.push(i - obj[s[i]]);
            obj[s[i]] = i
        }else{
            answer.push(-1);
            obj[s[i]] = i
        }
    }    return answer;
}