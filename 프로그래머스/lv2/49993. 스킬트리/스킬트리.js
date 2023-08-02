function solution(skill, skill_trees) {
    var answer = 0;
    skill.split('');
    for(let i = 0; i < skill_trees.length; i++){
        const curr = skill_trees[i].split('').map(item => skill.indexOf(item))
        .filter(item => item > -1 );
        if(curr.length === 0){
            answer++;
            continue;
        }
        
        if(curr[0] === 0) {
            if(curr.length > 1){
                for(let j = 1; j < curr.length; j++){
                    if(curr[j-1]+1 !== curr[j]) break;
                    if(j === curr.length-1) answer++;
                } 
            }else answer++;
        };


    }
    
    return answer;
}