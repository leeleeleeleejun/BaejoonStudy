function solution(clothes) {
    var answer = 1;

    const map = new Map()
    for(const item of clothes){
        if(!map.has(item[1])){
            map.set(item[1],[item[0]])
        }else {
            map.get(item[1]).push(item[0])
        }
    }
    for(const item of map){
        answer *= (item[1].length + 1);
    }
    return answer-1;
}