function solution(numbers, target) {
    var answer = 0;
    
    const a = (index, array) => {
        if(index >= numbers.length){
            const value = array.reduce((prev, curr) => prev + curr, 0)
            if(value === target ){
                answer++
            }
            return
        }
        
        const targetIndex = array[index]
        const prevArray = array.slice(0,index)
        const nextArray = array.slice(index+1)
        
        
        const plusArray = [...prevArray, targetIndex, ...nextArray]
        const minusArray = [...prevArray, (targetIndex * -1), ...nextArray]

        a(index+1, plusArray)
        a(index+1, minusArray)
    }
    
    a(0, numbers)
    
    return answer;
}