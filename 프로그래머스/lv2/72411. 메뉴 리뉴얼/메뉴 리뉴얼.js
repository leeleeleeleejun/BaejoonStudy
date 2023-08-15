function solution(orders, course) {
    const answer = [];
    
    function combinations(arr, length) {
        if (length === 0) return [[]];
        if (arr.length === 0) return [];
        
        const [first, ...rest] = arr;
        
        const combinationsWithoutFirst = combinations(rest, length);
        const combinationsWithFirst = combinations(rest, length - 1).map(c => [first, ...c]);
        
        return [...combinationsWithoutFirst, ...combinationsWithFirst];
    }
    
    for (const courseLength of course) {
        const orderCounts = {};
        
        for (const order of orders) {
            const orderCombinations = combinations(order.split('').sort(), courseLength);
            
            for (const combo of orderCombinations) {
                const key = combo.join('');
                orderCounts[key] = (orderCounts[key] || 0) + 1;
            }
        }
        
        const maxCount = Math.max(...Object.values(orderCounts));
        if (maxCount < 2) continue;
        
        for (const [key, count] of Object.entries(orderCounts)) {
            if (count === maxCount) {
                answer.push(key);
            }
        }
    }
    
    return answer.sort();
}
