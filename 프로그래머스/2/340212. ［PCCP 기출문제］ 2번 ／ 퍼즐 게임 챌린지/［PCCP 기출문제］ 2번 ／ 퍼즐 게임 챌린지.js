const solved = (diffs, times, limit, level) => {
        let time = 0;

        for(let i = 0; i < diffs.length; i++){
            const curr = diffs[i];
            
            if(curr <= level){
                time += times[i];
            }else{
                const diff = curr - level;
                const prev = i > 0 ? times[i - 1] : 0;
                time += (times[i] + prev) * diff + times[i]
            }
            
            if(time > limit){
                return false;
            }
        }
    
    return true;
}

function solution(diffs, times, limit) {    
    let low = 1;
    let high = diffs.reduce((a, b) => Math.max(a, b), -Infinity);

    while(low <= high){
        const harf = Math.floor((low + high) / 2)
        
        const result = solved(diffs, times, limit, harf);
        if (result){
            high = harf - 1;
        }else{
            low = harf + 1;
        }
    }
  
    return low;
}