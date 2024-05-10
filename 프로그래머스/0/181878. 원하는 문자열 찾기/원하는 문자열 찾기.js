function solution(myString, pat) {
    var answer = myString.toUpperCase().indexOf(pat.toUpperCase()) === -1  ? 0 : 1;
    return answer;
}