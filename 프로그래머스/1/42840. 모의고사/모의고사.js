function solution(answers) {
    const result = [0, 0, 0];
    const answer = [];
    const a = [1, 2, 3, 4, 5]
    const b = [2, 1, 2, 3, 2, 4, 2, 5]
    const c = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]

    for(let i = 0; i < answers.length; i++){
        if(a[i % a.length] === answers[i]) result[0]++
        if(b[i % b.length] === answers[i]) result[1]++
        if(c[i % c.length] === answers[i]) result[2]++
    }
    
    const max = Math.max(...result)
    result.forEach((item, index) => {
        if(item === max){
            answer.push(index+1)
        }
    })
    
    return answer;
}