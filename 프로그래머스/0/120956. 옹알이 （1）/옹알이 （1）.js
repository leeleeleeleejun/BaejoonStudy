function solution(babbling) {
    var answer = 0;
    const words = ["aya", "ye", "woo", "ma"]
    
    for(let item of babbling){
        for(let word of words){
            item = item.split(word).join(' ')
        }
        if(item.trim().length === 0) answer++
    }
    
    return answer;
}