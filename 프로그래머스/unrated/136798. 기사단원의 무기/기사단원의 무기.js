function solution(number, limit, power) {
  var answer = 0;
  var array = [];
  for (let i = 1; i <= number; i++) {
      var count = 0;
    for (let n = 1; n <= Math.sqrt(i); n++) {
      if (i % n === 0) {
          count++
        if (n !== i / n) {
          count++;
        }
      }
    }
    array.push(count)  
  }
    for(item of array){
     answer += item <= limit ? item : power; 
  }
  return answer;
}
