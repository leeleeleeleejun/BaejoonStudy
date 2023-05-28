function solution(nums) {
  let answer = 0;
  const set = new Set();

  function isPrime(num) {
    if (num === 0 || num === 1) return false;
    // 에라토스테네스의 채
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  }

  // 모든 조합을 구하는 재귀함수
  function recursive(comb, start) {
    if (comb.length === 3) {
      const sum = comb.reduce((a, b) => a + b);
      if (isPrime(sum)) {
        answer++;
      }
      return;
    }
    for (let i = start; i < nums.length; i++) {
      recursive([...comb, nums[i]], i + 1);
    }
  }
  
  recursive([], 0);
  return answer;
}
