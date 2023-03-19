function solution(food) {
    let process = true;
    let count = 0;
    let index = 0;

    while(process){
      if(food[index] === 1 && food[index+1] === 2 && food[index+2] === 3 && food[index+3] === 1){
        food.splice(index,4)
        count++
        if(index !== 0) {
          index = index-3
        }
      } else if(index > food.length-3){
        process = false
      } else {

        index++
      }
    }
    return count
  }