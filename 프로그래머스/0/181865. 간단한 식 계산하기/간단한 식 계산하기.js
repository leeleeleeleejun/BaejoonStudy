function solution(binomial) {
    const a =  binomial.split(' ');
    
    if(a[1] === '+'){
        return Number(a[0]) + Number(a[2])
    }else if(a[1] === '-'){
        return a[0] - a[2]
    }else {
        return a[0] * a[2]
    }
}