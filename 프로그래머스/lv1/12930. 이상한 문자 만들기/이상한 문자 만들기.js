function solution(s) {
    var answer = [];
    s = s.split(' ');
    for(let i = 0; i < s.length; i++){
        let result='';
        s[i] = s[i].split(' ').join('');
        for(let j = 0; j < s[i].length; j++){
            if(j%2===0){
                result += s[i][j].toUpperCase();
            }else result += s[i][j].toLowerCase()
        }
        answer.push(result)
    }
    return answer.join(' ');
}