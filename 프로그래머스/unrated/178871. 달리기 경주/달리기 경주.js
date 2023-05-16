function solution(players, callings) {
    var answer = [];
    const map = new Map();
    for(let i = 0; i < players.length; i++){
        map.set(players[i],i )
    }
    for(let i = 0; i < callings.length; i++){
        const target = map.get(callings[i])
        const front = players[target - 1];
        
        [players[target], players[target - 1]] = [players[target -1], players[target]];
        map.set(callings[i], map.get(callings[i])-1)
        map.set(front, map.get(callings[i])+1)

    }   
        
    return players;
}