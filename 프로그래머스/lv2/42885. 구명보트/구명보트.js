function solution(people, limit) {
  var answer = 0;
  const aa = people.filter((item)=>(limit - item) >= 40);
  answer += people.length - aa.length;
  aa.sort((a, b) => b - a)
  for(let i = 0; i < aa.length; i++){
    if(aa[i]+aa[aa.length-1] > limit){
      answer++;
    }else{
      answer++;
      aa.pop();
    }
  }
  return answer;
}