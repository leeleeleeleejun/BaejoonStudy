function solution(triangle) {
    const n = triangle.length;
    const dp = [...triangle[n - 1]]; // dp 배열 초기화

    // Bottom-up으로 삼각형을 탐색하며 최적 경로의 합을 계산
    for (let i = n - 2; i >= 0; i--) {
        for (let j = 0; j < triangle[i].length; j++) {
            // 현재 위치에서의 최적 경로의 합은 현재 값과 아래층의 두 경로 중 큰 값을 선택하여 더한 것
            dp[j] = triangle[i][j] + Math.max(dp[j], dp[j + 1]);
        }
    }

    return dp[0]; // 최종 결과 반환
}
