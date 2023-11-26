function solution(N, stages) {
    var answer = [];
    stages.sort((a,b)=> a-b)
    for(let i = 1; i <= N; i++){
        const arrivePlayer = stages.filter(item => item >= i);
        const clearPlayer = stages.filter(item => item > i);
        answer.push([clearPlayer.length/arrivePlayer.length, i])
    }
    return answer.sort((a,b)=> a[0]-b[0]).map(item => item[1]);
}