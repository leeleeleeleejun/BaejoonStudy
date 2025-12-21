function solution(numbers, target) {
    var answer = 0;
    
    const a = (arr,currIdx) => {
        
        if(arr.length < numbers.length){
            const plus = [...arr, numbers[currIdx]]
            const minus = [...arr, numbers[currIdx] * - 1]

            a(plus, currIdx + 1)
            a(minus, currIdx + 1)
            
        }else{
            const value = arr.reduce((a,b)=> a + b, 0)
            if(value === target){
                answer++
            }
        }
    }
    
    a([],0)
    
    return answer;
}