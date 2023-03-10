function solution(n) {
    var answer = 0;
    for(let i = 1; i < n/2; i++){
        let aa = i;
        for(let j = i+1; i < n/2; j++){
            aa += j
            if(aa===n){
                answer++;
                break;
            }else if( aa > n ){
                break;
            }
        }
    }
    return answer+1;
}