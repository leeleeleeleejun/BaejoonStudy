function solution(arr1, arr2) {
    var answer = [];

    // for(let k = 0; k < arr1.length; k++){
    //     for(let i = 0; i < arr1[0].length; i++){
    //         for(let j = 0; j < arr2.length; j++){
    //             for(let l = 0; l < arr2[0].length; l++){
    //                 arr1[k]
    //             }
    //         }
    //     }
    // }
    
    for(let i = 0; i < arr1.length; i++){
        const arr = [];
        for(let j = 0; j < arr2[0].length; j++){
            let num = 0
            for(let l = 0; l < arr1[0].length; l++){
                num += (arr1[i][l] * arr2[l][j])
            }
            arr.push(num)
        }
        answer.push(arr)
    }

    
    
    
    return answer;
}