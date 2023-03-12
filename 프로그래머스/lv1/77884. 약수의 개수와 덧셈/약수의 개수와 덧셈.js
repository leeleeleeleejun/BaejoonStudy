function solution(left, right) {
    var answer = 0;
    
    for(let n = left; n <= right; n++){
        var result = [];
        for(let i = 1; i <= Math.sqrt(n); i++){
            if(n%i===0){
                result.push(i);
                if (i !== n / i){
                    result.push(n/i);
                }
            }
        }
        result.length % 2 === 0 ? answer += n : answer -= n;
    }

    return answer;
}