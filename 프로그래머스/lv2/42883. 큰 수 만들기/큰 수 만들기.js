function solution(number, k) {
  const stack = [];
  let count = 0;
  
  for (let i = 0; i < number.length; i++) {
    const current = number[i];
    
    while (stack.length > 0 && stack[stack.length - 1] < current && count < k) {
      stack.pop();
      count++;
    }
    
    stack.push(current);
  }
  
  // k개의 숫자를 제거하지 못한 경우, 남은 숫자 중에서 뒤에서부터 제거합니다.
  while (count < k) {
    stack.pop();
    count++;
  }
  
  return stack.join('');
}
