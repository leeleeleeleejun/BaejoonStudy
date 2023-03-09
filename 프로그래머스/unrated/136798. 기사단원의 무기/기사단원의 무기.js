function solution(number, limit, power) {
  let answer = 0;
  let array = [];
  for (let n = 1; n <= number; n++) {
    let count = 0;
    for (let i = 1; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
          count++;
          if (i !== n / i) {
            count++;
        }
      }
  }
      array.push(count);
}
console.log(array)
  for(item of array){
     answer += item <= limit ? item : power; 
  }
  return answer;
}
