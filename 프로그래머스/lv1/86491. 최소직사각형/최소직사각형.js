function solution(sizes) {
    //var answer = 0;
    sizes.map(i=>i.sort((a,b)=>b-a))
    var one = 0;
    var two = 0;
    for(let i = 0; i < sizes.length; i++){
        const current = sizes[i];
        one > current[0] ? one : one = current[0];
        two > current[1] ? two : two = current[1];
    }
    return one * two;
}