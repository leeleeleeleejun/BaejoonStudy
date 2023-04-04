function solution(priorities, location) {
    var answer = 0;
    let map = new Map();
    for(let i = 0; i < priorities.length; i++){
        map.set(i,priorities[i])
    }
    map = [...map]
    priorities.sort((a,b)=> b-a)
    while(true){
        if(map[0][1] === priorities[0]){
            if(map[0][0] === location){
                answer++;
                break;
            }
            answer++
            map.shift();
            priorities.shift();
        }else{
            map.push(map[0]);
            map.shift();
        }
    }
    return answer;
}