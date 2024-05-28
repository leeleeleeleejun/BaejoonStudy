function solution(n, control) {
    var answer = n;
    const a = control.split('');

    for(let i = 0; i < control.length; i++){
        if(a[i] === 'w'){
            answer++;
        }else if(a[i] === 's'){
            answer--;
        }else if(a[i] === 'd'){
            answer += 10;
        }else{
            answer -= 10;
        }
    }
    return answer;
}