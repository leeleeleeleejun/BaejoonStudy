function solution(n, words) {
  const answer = [0, 0]; // 초기값 설정
  const usedWords = new Set(); // 사용된 단어를 저장하는 Set
  let prevWord = words[0]; // 이전 단어

  usedWords.add(prevWord); // 첫 번째 단어를 사용된 단어에 추가

  for (let i = 1; i < words.length; i++) {
    const currentWord = words[i];

    // 이전 단어의 마지막 글자와 현재 단어의 첫 번째 글자가 같은지 확인
    if (prevWord[prevWord.length - 1] !== currentWord[0]) {
      answer[0] = (i % n) + 1; // 문제를 잘못 말하면 혼란스러울 수 있으므로 인덱스를 1부터 시작하도록 함
      answer[1] = Math.floor(i / n) + 1;
      break;
    }

    // 현재 단어가 이미 사용된 단어에 포함되어 있는지 확인
    if (usedWords.has(currentWord)) {
      answer[0] = (i % n) + 1;
      answer[1] = Math.floor(i / n) + 1;
      break;
    }

    // 현재 단어를 사용된 단어에 추가하고 이전 단어를 업데이트
    usedWords.add(currentWord);
    prevWord = currentWord;
  }

  return answer;
}
