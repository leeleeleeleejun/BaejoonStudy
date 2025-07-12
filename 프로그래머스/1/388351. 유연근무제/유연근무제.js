function solution(schedules, timelogs, startday) {
    var answer = 0;
    for(let i = 0; i < schedules.length; i++){
        let hour = Math.floor(schedules[i] / 100);
        let minute = schedules[i] % 100 + 10;

        if (minute >= 60) {
          hour += 1;
          minute -= 60;
        }
        let maxTime = hour * 100 + minute;
        
        let pass = true;
        for(let j = 0; j < timelogs[i].length; j++){
            if ((j + startday) % 7 === 6 || (j + startday) % 7 === 0) continue;   
            if(timelogs[i][j] > maxTime) {
                pass = false;
                break;
            }
        }
        if(pass) answer++;
    }
    
    return answer;
}