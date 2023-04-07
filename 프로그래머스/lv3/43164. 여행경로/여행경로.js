function solution(tickets) {
  var answer = [];
  function serch(target, othres, result) {
      // 순회할 배열 요소가 남아있지 않을 경우 동작
      if(othres.length === 1){
          // 마지막 남은 요소일 경우 출발지와 도착지 모두 추가해 완성
          answer.push([...result, othres[0][0], othres[0][1]])
          return;
      }
    for (let i = 0; i < othres.length; i++) {
        // 배열을 순회하며 target의 도착지와 같은 출발지를 찾을 요소 확인
        // target : ["ICN", "JFK"] 일 경우 [JFK", "###"]인 요소 확인
      if (target === othres[i][0]) {
        serch(
          othres[i][1],
          [...othres.slice(0, i), ...othres.slice(i + 1)],
            //  결과값엔 출발지만 저장
          [...result, othres[i][0]]
        );
      }
    }
  }
    serch('ICN', tickets, [])
  return answer.sort()[0];
}
