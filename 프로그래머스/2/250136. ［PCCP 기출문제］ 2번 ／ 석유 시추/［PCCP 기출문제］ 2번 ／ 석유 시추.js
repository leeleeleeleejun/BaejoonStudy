function solution(land) {
    var answer = 0;
    const n = land.length
    const m = land[0].length
    const columnSum = new Array(m).fill(0);

    const visited = land.map(item => item.map(i => false))
    const dx = [-1, 1, 0, 0]
    const dy = [0, 0, -1, 1]
    
    const bfs = (startR, startC) => {
        const queue = [[startR, startC]]
        visited[startR][startC] = true;
        const foundCols = new Set()
        let head = 0
        let size = 0
        
        while(head < queue.length){
            const [row, col] = queue[head++]
            
            size++
            foundCols.add(col);

            for(let i = 0; i < 4; i++){
                const nr = row + dx[i]
                const nc = col + dy[i]
                
                if(0 <= nr && nr < n && 0 <= nc && nc < m && land[nr][nc] === 1 && !visited[nr][nc]){
                    visited[nr][nc] = true
                    queue.push([nr,nc])
                }
                
            }
        }
        return {size, foundCols}
    }

    
    for(let i = 0; i < n; i++){
        for(let j = 0; j < m; j++){
            if(land[i][j] === 1 && !visited[i][j]){
                const {size, foundCols} = bfs(i,j)
                foundCols.forEach(colIndex => {
                    columnSum[colIndex] += size;
                });
            }
        }
    }
    
    console.log(columnSum)
    return Math.max(...columnSum);
}