function solution(n_str) {
    var answer = '';
    for(let i = 0; i < n_str.length; i++){
        if(n_str[i] !== '0'){
            console.log(i)
            answer = n_str.slice(i);
            break;
        }
    }
    return answer;
}