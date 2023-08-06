const calculateDayPast = (year,month,day)=> year * 12 * 28 + month * 28 + day 

function solution(today, terms, privacies) {
    var answer = [];
    const termsObj = {};
    const _b = today.split('.').map(Number);
    const b = calculateDayPast(_b[0], _b[1], _b[2])

    for(let i = 0; i < terms.length; i++){
        const curr = terms[i].split(' ');
        termsObj[curr[0]] = Number(curr[1])
    }
    
    for(let i = 0; i < privacies.length; i++){
        const curr = privacies[i].split(' ');
        const targetDate = curr[0].split('.').map(Number);
        if(targetDate[1] + termsObj[curr[1]] > 12){
            targetDate[0] += Math.floor((targetDate[1] + termsObj[curr[1]]) / 12);
            targetDate[1] = (targetDate[1] + termsObj[curr[1]]) % 12;
        }else{
            targetDate[1] += termsObj[curr[1]]
        }
        const a = calculateDayPast(targetDate[0], targetDate[1], targetDate[2]);
        if(a <= b){
            answer.push(i+1)
        }
        
    }
    return answer;
}