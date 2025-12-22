function solution(maps) {
    const n = maps.length;
    const m = maps[0].length;
    
    // 상, 하, 좌, 우 이동을 위한 방향 배열
    const dx = [-1, 1, 0, 0];
    const dy = [0, 0, -1, 1];
    
    // 큐(Queue): [행, 열] 정보를 담음
    // 시작점 (0, 0)을 넣고 시작
    const queue = [[0, 0]];
    
    // 큐가 빌 때까지 반복
    while (queue.length > 0) {
        // 큐의 맨 앞에서 하나 꺼냄 (현재 위치)
        // 주의: 데이터가 매우 클 때는 shift()가 느릴 수 있으나, 이 문제(100x100)는 통과 가능
        const [x, y] = queue.shift();
        
        // 상하좌우 4방향 확인
        for (let i = 0; i < 4; i++) {
            const nx = x + dx[i];
            const ny = y + dy[i];
            
            // 1. 지도 범위를 벗어나지 않는지 확인
            // 2. 벽(0)이 아닌지, 그리고 아직 방문 안 한 길(1)인지 확인
            if (nx >= 0 && nx < n && ny >= 0 && ny < m && maps[nx][ny] === 1) {
                
                // 핵심: 다음 칸에 '현재까지 거리 + 1'을 기록해버림
                maps[nx][ny] = maps[x][y] + 1;
                
                // 다음 칸을 큐에 넣음
                queue.push([nx, ny]);
            }
        }
    }
    
    // 도착 지점(n-1, m-1)의 값 확인
    // 값이 1 그대로라면 도달 못 했다는 뜻 (원래 1이었으니까)
    const dest = maps[n - 1][m - 1];
    
    // 도달 못했으면 -1, 했으면 거리 반환
    return dest === 1 ? -1 : dest;
}