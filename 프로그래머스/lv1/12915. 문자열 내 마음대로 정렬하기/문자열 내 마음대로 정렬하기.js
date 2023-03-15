function solution(strings, n) {
  return strings.sort((a, b) => {
    if(a[n]===b[n]){
        for(let i = 0; i < a.length; i++){
            if(a[i]!==b[i])
                return a.charCodeAt(i) - b.charCodeAt(i)
        }
    }else return a.charCodeAt(n) - b.charCodeAt(n)
  });
}