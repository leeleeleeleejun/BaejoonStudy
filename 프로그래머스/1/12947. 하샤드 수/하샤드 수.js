function solution(x) {
    const a = String(x).split('').reduce((a,b)=> Number(a)+Number(b),0)
    if(x%a===0){
        return true
    }else return false
}