function solution(participant, completion) {
    var answer = '';
    const map1 = new Map()
    const map2 = new Map()
    
    for(let i = 0;  i < participant.length; i++){
        const currParticipant = participant[i]
        const value = map1.get(currParticipant)
        if(value){
            map1.set(currParticipant, value + 1)
        }else{
            map1.set(currParticipant, 1)
        }
    }
    
    for(let i = 0;  i < completion.length; i++){
        const currCompletion = completion[i]
        const value = map2.get(currCompletion)
        if(value){
            map2.set(currCompletion, value + 1)
        }else{
            map2.set(currCompletion, 1)
        }
    }

    for(const item of map1){
        const value1 = map1.get(item[0])
        const value2 = map2.get(item[0])
        if(value1 !== value2){
            return item[0]
        }

    }
    
    return answer;
}