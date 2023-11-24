function solution(arr1, arr2) {
    var answer = [];
    for(let i = 0; i < arr1.length; i++){
        const target = [];
        for(let l = 0; l < arr1[i].length; l++){
            target.push(arr1[i][l] + arr2[i][l]);
        }
        answer.push(target);
    }
    return answer;
}