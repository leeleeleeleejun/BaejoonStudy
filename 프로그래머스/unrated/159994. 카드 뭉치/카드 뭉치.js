function solution(cards1, cards2, goal) {
    var answer = '';
    const leng = goal.length
    for(let i = 0; i < leng; i++){
        if(cards1[0] === goal[0]){
            cards1.shift();
            goal.shift();
        }else if(cards2[0] === goal[0]){
            cards2.shift();
            goal.shift();
        }
        console.log(goal)
    }
    return goal.length === 0 ? 'Yes' : 'No';
}