function solution(new_id) {
  var answer = '';
  const regexr = /[\w-_.]+/g;
  let a = new_id.toLowerCase().match(regexr).join('').replaceAll(/\.{2,}/g, '.')
      a = a.replace(/^\./, '').replace(/\.$/,'');
      if(a.length < 1){
          a = 'a'
      }else{
        if(a.length > 15){
          a = a.slice(0,15).replace(/\.$/,'');
        }
      }

      if(a.length < 3){
          a += (a[a.length-1]).repeat(3-a.length)
      }
  
  return a;
}
