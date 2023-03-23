function solution(array, commands) {
    var answer = [];
    for (let i = 0; i < commands.length; i++){
        const crr = commands[i]
        answer.push(array.slice(crr[0]-1,crr[1]).sort((a,b) => a-b)[crr[2]-1])
        
    }
    return answer;
}