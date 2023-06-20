function solution(progresses, speeds) {
    var answer = [];

    while(progresses.length !== 0) {
        let result = 0;
        for(let i = 0; i < progresses.length; i++){
            progresses[i] += speeds[i];
        }
        while(progresses[0] >= 100){
            result++;
            progresses.shift()
            speeds.shift()
        }
        if(result > 0){
            answer.push(result)
        }
    }
    
    return answer;
}

[90, 90, 90, 90],[30, 1, 1, 1],[1, 3]