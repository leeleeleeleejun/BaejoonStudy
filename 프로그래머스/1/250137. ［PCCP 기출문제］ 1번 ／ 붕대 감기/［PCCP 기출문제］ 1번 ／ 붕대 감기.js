function solution(bandage, health, attacks) {
    var answer = health;
    const maxTime = attacks.at(-1)[0]
    let currAtack = 0
    let sequence = 0 // 연속공격

    
    for(let i = 0; i <= maxTime; i++){
        if(answer <= 0){
            return -1
        }
        
        if(i === attacks[currAtack][0]){
            answer -= attacks[currAtack][1]
            sequence = 0
            currAtack++
            continue
        }
        
        if(answer + bandage[1] <= health){
            answer += bandage[1]
        }else{
            answer = health
        }
        sequence++
        
        if(sequence === bandage[0]){
            if(answer + bandage[2] <= health){
                answer += bandage[2]
                sequence = 0
            }else{
                answer = health
            }
            
        }
        
    }
    
    
    return answer <= 0 ? -1 : answer;
}