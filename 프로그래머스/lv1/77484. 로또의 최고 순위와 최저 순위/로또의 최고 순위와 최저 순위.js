function solution(lottos, win_nums) {
    const langking = {
        6 : 1,
        5 : 2,
        4 : 3,
        3 : 4,
        2 : 5
    }
    const x = lottos.filter(item => item === 0);
    const yes = lottos.filter(item => win_nums.includes(item));
    const best = langking[yes.length+x.length] ? langking[yes.length+x.length] : 6
    const worst = langking[yes.length] ? langking[yes.length] : 6
    
    var answer = [best, worst];
    return answer;
}