function solution(points, routes) {
    var answer = 0;
    routes = routes.map(item => [...item.map(point => [...points[point - 1]]), 0])
    let crushCount = 0
    const curr = routes.map(item => item[item[item.length-1]].join(',')).sort()
    
        let a = 0
        for(let i = 0; i < curr.length; i++){
            let count = 0;

            for(let j = i + 1; j < curr.length; j++){
                if(curr[i] === curr[j]){
                    count++
                    i++
                }
            }
            if(count > 0){
                a++
            }
        }

    crushCount += a
    
    while(routes.length > 0){
        // 좌표 비교
        for(let i = 0; i < routes.length; i++){
            const target = routes[i]
            let head = target[target.length - 1]
            const curr = target[head]
            const goal = target[head + 1]
            const curRow = curr[0]
            const curCol = curr[1]
            const goalRow = goal[0]
            const goalCol = goal[1]
            
            if(curRow > goalRow){
                curr[0]--
            }else if(curRow < goalRow){
                curr[0]++
            }else if(curCol > goalCol){
                curr[1]--
            }else if(curCol < goalCol){
                curr[1]++
            }
        }
        
        const curr = routes.map(item => item[item[item.length-1]].join(',')).sort()
        let a = 0
        for(let i = 0; i < curr.length; i++){
            let count = 0;

            for(let j = i + 1; j < curr.length; j++){
                if(curr[i] === curr[j]){
                    count++
                    i++
                }
            }
            if(count > 0){
                a++
            }
        }

        crushCount += a
        
        
        for(let i = 0; i < routes.length; i++){
            const target = routes[i]
            let head = target[target.length - 1]
            const curr = target[head]
            const goal = target[head + 1]
            
            if(curr[0] === goal[0] && curr[1] === goal[1]){
                if(head === target.length - 3){
                    routes.splice(i,1)  
                    i--
                }else{
                    target[target.length - 1]++
                }
            }
        }

        
    }
    

    return crushCount;
}