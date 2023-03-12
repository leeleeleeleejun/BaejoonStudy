function solution(n, m, section) {
    var answer = 0;
    let array = [];
    for(let i = 0; i < section.length; i++){
        if(array.includes(section[i])) continue;
        answer++
        for(let j = section[i]; j < m+section[i]; j++){
            array.push(j);
        }
    }  
    
    return answer;
}