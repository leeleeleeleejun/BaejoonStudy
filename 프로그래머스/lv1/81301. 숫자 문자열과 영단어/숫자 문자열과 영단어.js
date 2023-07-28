function solution(s) {
    var answer = s;
    const word = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
    for(let i = 0; i < word.length; i++){
        answer = answer.replaceAll(word[i], i);
    }
    return Number(answer);
}