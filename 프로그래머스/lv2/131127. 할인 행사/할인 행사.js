function solution(want, number, discount) {
  var answer = 0;
  let map = new Map();
  for (let i = 0; i < want.length; i++) {
    map.set(want[i], number[i]);
  }
    
  map = [...map]
  for(let i = 0; i < discount.length; i ++){
      const array = discount.slice(i, i + 10)
      for(let j = 0; j < map.length; j++){
          let a = array.filter(i => i === map[j][0])
          if(map[j][1] > a.length) break;
          if(j === map.length - 1){
              console.log(i)
              answer += 1;
              break
          }
      }
  }
    return answer;
}