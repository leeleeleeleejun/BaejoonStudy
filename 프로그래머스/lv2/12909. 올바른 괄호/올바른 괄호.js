function solution(s){
    var answer = true;
    let stack = 0;
    s=s.split('');
    for(const item of s){
        if(item==='('){
            stack++
        }else if (stack) {
            stack--
        }else{
            return false
        }
    }

    return stack === 0 ? true : false;
}