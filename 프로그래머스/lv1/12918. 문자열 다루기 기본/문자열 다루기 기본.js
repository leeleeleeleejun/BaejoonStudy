function solution(s) {
    if(s.length === 4 || s.length === 6){
        const a = [...s].filter(item => !isNaN(Number(item))).length;
        return a === s.length ? true : false;    
    }
    return false;
}