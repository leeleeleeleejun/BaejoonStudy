function solution(numbers) {
  const set = new Set();
  var answer = 0;
  numbers = numbers.split("");

  function recursive(comb, others) {
    if (comb.length !== 0) set.add(Number(comb.join("")));
    for (let i = 0; i < others.length; i++) {
      recursive(
        [...comb, others[i]],
        [...others.slice(0, i), ...others.slice(i + 1, others.length)]
      );
    }
  }

  recursive([], numbers);

  for(const item of [...set]){
    if(isPrime(item)) answer++
  }
  function isPrime(num) {
    if(num === 0 || num === 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {  
      if (num % i === 0) return false;
    }
      return true;
  }

  return answer;
}