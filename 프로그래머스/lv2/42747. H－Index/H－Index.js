function solution(citations) {
    citations.sort((a, b) => b - a); // 내림차순 정렬
    for (let i = 0; i < citations.length; i++) {
        if (citations[i] <= i) {
            return i; // H-index 반환
        }
    }
    return citations.length; // 모든 논문이 인용된 경우
}
