function solution(n) {
    var answer = 1;
    let array = [2];
    for(let j = 2; j <= n; j++){
        if(j > 3 && (j%2 === 0 || j%3 === 0))continue;
        for(let i = 0; i < array.length; i++){
            if (j%array[i] === 0) {
                break;
            }
            if(i === array.length - 1) {
                if(Math.sqrt(n) > j){
                    array.push(j);
                }
                answer++
            }
        }
    }
    return answer;
}