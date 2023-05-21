function solution(arr) {
    const min = Math.min(...arr)
    console.log(min)
    if(arr.length > 1) {
        return arr.filter(item => min !== item)
    }else return [-1]
}