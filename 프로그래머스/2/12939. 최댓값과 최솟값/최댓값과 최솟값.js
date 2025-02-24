function solution(s) {
    const array = s.split(' ').sort((a,b)=> a-b)
    var answer = [array[0], array[array.length - 1]].join(' ');
    return answer;
}