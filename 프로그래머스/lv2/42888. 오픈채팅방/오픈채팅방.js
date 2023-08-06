function solution(record) {
    var answer = [];
    const userList = {}
    for(let i = 0; i < record.length; i++){
        const curr = record[i].split(' ');
        if(curr[0] === 'Leave'){
            answer.push([curr[1],`${curr[1]}님이 나갔습니다.`])
            continue;
        }
        if(curr[0] === 'Enter'){
            answer.push([curr[1],`${curr[1]}님이 들어왔습니다.`])
        }
        userList[curr[1]] = curr[2];
    }
    
    return answer.map(item => item[1].replace(item[0], userList[item[0]])
    )
}