function solution(lines) {
    var answer = 0;
    const minArray = lines.map(item => item[0])
    const maxArray = lines.map(item => item[1])
    const max = Math.max(...maxArray)
    const min = Math.min(...minArray)
    
    
    for(let i = min; i < max; i++){
        let count = 0;
        
        for(let j = 0; j < lines.length; j++){
            if(lines[j][0] <= i && lines[j][1] >= i + 1){
                count++
            }   
        }
        if(count >= 2){
            answer++
        }
    }
    
    
    return answer;
}