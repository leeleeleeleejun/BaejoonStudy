function solution(phone_number) {
    var answer = ('*').repeat(phone_number.length).split('');
    for(let i = 0; i < 4; i++){
        answer[phone_number.length -1 - i] = phone_number[phone_number.length -1 - i]
    }
    return answer.join('');
}