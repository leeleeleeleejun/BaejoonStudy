function solution(name, yearning, photo) {
    var answer = [];
    const total = new Map();
    for(let i = 0; i < name.length; i++){
        total.set(name[i],yearning[i])
    }
    for(let i = 0;  i< photo.length; i++){
        let count = 0;
        for(let j = 0; j < photo[i].length; j++){
            if(total.has(photo[i][j])){
                count += total.get(photo[i][j])
            }
        }
        answer.push(count)
    }
    return answer;
}