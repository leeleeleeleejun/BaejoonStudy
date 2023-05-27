function solution(number, k) {
    var answer = '';
    const stack = [];
    let count = 0;
    
    for (let i = 0;  i < number.length; i ++){
        const currNum = number[i]
        while(stack.length > 0 && stack[stack.length-1] < currNum && count < k){
            stack.pop();
            ++count;
        }
        stack.push(currNum)
    }
    
      // k개의 숫자를 제거하지 못한 경우, 남은 숫자 중에서 뒤에서부터 숫자를 제거합니다.
  while (count < k) {
    stack.pop();
    count++;
  }
    return stack.join('');
}