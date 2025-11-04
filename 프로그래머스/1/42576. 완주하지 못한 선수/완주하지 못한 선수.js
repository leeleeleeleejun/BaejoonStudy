function solution(participant, completion) {
    var answer = '';
    const map1 = new Map()
    const map2 = new Map()
    
    const setMap = (map, peoples) => {   
        for(let i = 0;  i < peoples.length; i++){
            const currPeople = peoples[i]
            const value = map.get(currPeople)
            if(value){
                map.set(currPeople, value + 1)
            }else{
                map.set(currPeople, 1)
            }
        }
    }
    
    setMap(map1, participant)
    setMap(map2, completion)


    for(const item of map1){
        const value1 = map1.get(item[0])
        const value2 = map2.get(item[0])
        if(value1 !== value2){
            return item[0]
        }

    }
    
    return answer;
}