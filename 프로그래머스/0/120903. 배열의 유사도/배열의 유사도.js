function solution(s1, s2) {
    var answer = 0;
    for(let i = 0; i < s1.length; i++){
        for(let l = 0; l < s2.length; l++){
            if(s1[i] === s2[l])  answer++
        }
    }
    return answer;
}