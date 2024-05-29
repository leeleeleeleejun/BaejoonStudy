function solution(num_list) {
    var answer = num_list;
    const a = num_list[num_list.length - 1];
    const b = num_list[num_list.length - 2];
    if(a > b){
        answer.push(a - b);
    }else{
        answer.push(a * 2);
    }
    return answer;
}