function solution(n, words) {
    var answer = [0, 0];
    let useWord = new Set;
    let prevWord = words[0];
    for(let i = 1; i < words.length; i++){
        let currentWord = words[i];
        if(prevWord[prevWord.length-1]!==currentWord[0]){
           
            answer[0] = i%n +1;
            answer[1] = Math.floor(i/n +1);
            break;
        }
        if(useWord.has(currentWord)){
            answer[0] = i%n +1;
            answer[1] = Math.floor(i/n +1);
            break;
        }
        useWord.add(prevWord)
        prevWord = currentWord
    }

    return answer;
}