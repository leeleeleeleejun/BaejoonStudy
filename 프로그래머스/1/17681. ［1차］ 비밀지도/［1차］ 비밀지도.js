function solution(n, arr1, arr2) {
    var answer = [];
    for(let i = 0; i < arr1.length; i++){
        let target1 = arr1[i].toString(2);
        let target2 = arr2[i].toString(2);
        if(target1.length < n){
            target1 = "0".repeat(n-target1.length) + target1;
        }
        if(target2.length < n){
            target2 = "0".repeat(n-target2.length) + target2;
        }
        let result = '';
        
        for(let l = 0; l < target1.length; l++){
            if(target1[l] === '1' || target2[l] === '1'){
                result += '#';
            }else{
                result += ' ';
            }
        }
        answer.push(result)
    }
    return answer;
}