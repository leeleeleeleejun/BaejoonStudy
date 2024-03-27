function solution(my_string) {
    var answer = my_string.replaceAll('a','').replaceAll('e','').replaceAll('i','').replaceAll('o','').replaceAll('u','');
    
    return answer;
}