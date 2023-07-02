function solution(x, n) {
    var answer = [];
    let a = x;
    while(n !== 0){
        answer.push(a)
        a+=x;
        n-=1;
    }
    return answer;
}