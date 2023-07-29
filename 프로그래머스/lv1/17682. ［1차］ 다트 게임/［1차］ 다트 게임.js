function solution(dartResult) {
    let answer = [];
    let prev = 0;
    for(let i = 0; i < dartResult.length; i++){
        const curr = dartResult[i];
        switch(curr){
            case 'S': 
                answer.push(Number(prev));
                break;
            case 'D': 
                answer.push(prev ** 2);
                break;
            case 'T': 
                answer.push(prev ** 3);
                break;
            case '*':
                answer[answer.length-1] = answer[answer.length-1] * 2;
                if(answer.length > 1){
                    answer[answer.length-2] = answer[answer.length-2] * 2;
                }
                break;
            case '#': 
                answer[answer.length-1] = answer[answer.length-1] * -1;
                break;
            default:
                if(dartResult[i+1] === '0' && dartResult[i] === '1'){
                    prev = 10;
                    i++;
                }else{
                    prev = dartResult[i];
                }
        }

    }
    return answer.reduce((a,b)=> a+ b);
}