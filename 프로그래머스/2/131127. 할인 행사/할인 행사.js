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