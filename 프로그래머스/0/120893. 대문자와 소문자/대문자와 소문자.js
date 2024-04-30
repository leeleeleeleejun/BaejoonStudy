function solution(my_string) {
    var answer = '';
    for(let i = 0; i < my_string.length; i++){
        const a = my_string[i].charCodeAt() >= 97 ? my_string[i].toUpperCase() : 
        my_string[i].toLowerCase();
        answer += a;
    }
    return answer;
}