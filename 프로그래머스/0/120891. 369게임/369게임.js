function solution(order) {
    var answer = 0;
    const array = String(order).split('');
    
    for(let i = 0; i < array.length; i++){
        if(array[i] === '3' || array[i] === '6' || array[i] === '9' ){
           answer++; 
        }
    }
    
    return answer;
}