function solution(a, b) {
    const ary = ['SUN','MON','TUE','WED','THU','FRI','SAT']
    var answer = ary[new Date (`2016/${a}/${b}`).getDay()];
    return answer;
}