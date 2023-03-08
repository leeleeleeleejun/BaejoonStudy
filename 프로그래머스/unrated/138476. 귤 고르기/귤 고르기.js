function solution(k, tangerine) {
    var answer = 0;
    let target = new Map();
    for(item of tangerine){
        if(target.has(item)){
            target.set(item,target.get(item)+1)
        }else target.set(item,1)
    }
    
    let targetSort = [...target].sort(function(a, b) {
        return b[1] - a[1];
    })
    for (item of targetSort){
        if(k >= item[1]){
            answer ++;
            k -= item[1]; 
        } else if(k !==0 ){
            answer++
            break
        } else {
            break
        }
        
      
    }
    

    
    return answer;
}