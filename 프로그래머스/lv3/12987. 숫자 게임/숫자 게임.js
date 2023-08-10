function solution(A, B) {
    var answer = 0;
    A.sort((a,b) => b-a);
    B.sort((a,b) => b-a);
    let B_Index = 0
    for(let i = 0; i < A.length; i++){
        if(A[i] < B[B_Index]){
            answer++;
            B_Index++;
        }
    }
    return answer;
}