function solution(my_string, num1, num2) {
    var answer = my_string.split('');
    const a = my_string[num1];
    const b = my_string[num2];
    answer[num1] = b;
    answer[num2] = a;
    return answer.join('');
}