function solution(start, end_num) {
    var answer = new Array(start - end_num + 1).fill(0).map(item => start--);
    return answer;
}