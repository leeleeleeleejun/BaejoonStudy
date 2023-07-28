function solution(k, score) {
    var answer = [];
    const array = []
    for(let i = 0; i < score.length; i++){
        if(i < k){
            array.push(score[i]);
            answer.push(Math.min(...array));
        }else{
            array.push(score[i]);
            array.sort((a,b) => a-b);
            array.shift();
            answer.push(array[0])
        }
    }
    return answer;
}