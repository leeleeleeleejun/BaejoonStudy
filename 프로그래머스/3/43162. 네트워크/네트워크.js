function solution(n, computers) {
    var answer = 0;
    const visited = []
    
    const dfs = (index) => {
        visited[index] = true
        
        for(let i = 0; i < n; i++){
            if(computers[index][i] === 1 && !visited[i]){
                dfs(i)
            }
        }
    }
    
    for(let i = 0; i < n; i++){
        if(!visited[i]){
            answer++
            dfs(i)
        }
    }
    
    return answer;
}