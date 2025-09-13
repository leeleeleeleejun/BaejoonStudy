function solution(friends, gifts) {
    var answer = 0;
    const obj = {};
    
    friends.forEach((friend, i) => {
        obj[friend] = {friends:{}, result:0, point:0};
        friends.forEach(friend2 => {
            if(friend === friend2) return;
            obj[friend].friends[friend2] = 0;
        })
        
    })
    
    const splitGifts = gifts.map(item => item.split(' '))
    splitGifts.forEach(item => {
        obj[item[0]].friends[item[1]] += 1;
        obj[item[0]].point += 1;
        obj[item[1]].point -= 1; 
    })
    
    
    for(const item in obj){
        const target = obj[item].friends
        for(const item2 in target){
            if(target[item2] > obj[item2].friends[item]){
                obj[item].result += 1;
            }else if(target[item2] === obj[item2].friends[item]){
                if(obj[item].point > obj[item2].point){
                    obj[item].result += 1;
                }
            }
        } 
        if(obj[item].result > answer) {
            answer = obj[item].result
        }
    }
    
    
    
    return answer;
}