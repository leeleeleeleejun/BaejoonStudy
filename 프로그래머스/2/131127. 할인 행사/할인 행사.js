function solution(want, number, discount) {
    var answer = 0;
    const map = new Map()
    const discountLength = discount.length;
    const totalNum = number.reduce((a,b)=>(a + b), 0)
    let day = 0;
    for(let i = 0; i < want.length; i++){
        map.set(want[i],number[i])
    }
    
    
    
    while(discountLength - day >= totalNum){
        const map2 = new Map()

        for(let i = day; i < 10+day; i++){
            let currentItem = map2.get(discount[i])
            if(currentItem){
                map2.set(discount[i], ++currentItem)
            }else{
                map2.set(discount[i], 1)
            }
        }
        
        
        let boo = true;
        for (const item of map) {
          const map2Item = map2.get(item[0]) || 0
          if(item[1] > map2Item){
              boo = false;
              break;
          }
        }
        
        if(boo){
            answer++;
        }
        
        ++day;
    }
    

    return answer;
}


// function solution(want, number, discount) {
//   var answer = 0;
//   let map = new Map();
//   for (let i = 0; i < want.length; i++) {
//     map.set(want[i], number[i]);
//   }
//
//   map = [...map]
//   for(let i = 0; i < discount.length - 9; i ++){
//     const array = discount.slice(i, i + 10)
//     for(let j = 0; j < map.length; j++){
//       let a = array.filter(i => i === map[j][0])
//       if(map[j][1] > a.length) break;
//       if(j === map.length - 1){
//         console.log(i)
//         answer += 1;
//         break
//       }
//     }
//   }
//   return answer;
// }
