
function solution(s, n) {
  var answer = '';
  s = s.split('');
  var reg = /[a-z]/i;
  
  for(let i = 0; i < s.length; i++){
    if(reg.test(s[i])){
      const target = s[i].charCodeAt(0);
      if(target >= 97){
         if(target + n > 122){
            answer += String.fromCharCode(97 + (target + n) - 122 - 1);
         }else{
            answer +=  String.fromCharCode(target + n);
         }
      }else{
          if(target + n > 90){
             answer += String.fromCharCode(65 + (target + n) - 90 - 1);
          }else{
             answer += String.fromCharCode(target + n);
         }
      }
    }else{ 
      answer += s[i]
    }
  }
  return answer;
}