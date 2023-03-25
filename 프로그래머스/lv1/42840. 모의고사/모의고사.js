function solution(answers) {
  var result = [0,0,0];
  let answer = []
  const one = [1, 2, 3, 4, 5];
  const two = [2, 1, 2, 3, 2, 4, 2, 5];
  const three = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  // one.repeat(Math.ceil(answers.length / one.length));
  // one = one.split(',').slice(0, answers.length);
  // two.repeat(Math.ceil(answers.length / two.length));
  // two = two.split(',').slice(0, answers.length);
  // three.repeat(Math.ceil(answers.length / three.length));
  // three = three.split(',').slice(0, answers.length);
  for (let i = 0; i < answers.length; i++) {
    if (one[i % 5] === answers[i]) result[0]++;
    if (two[i % 8] === answers[i]) result[1]++;
    if (three[i % 10] === answers[i]) result[2]++;
  }
  //const array = [one, two, three];
    
  // for (let i = 0; i < array.length; i++){
  //     for(let j = 0; j < answers.length; j++){
  //         if(Number(array[i][j]) === Number(answers[j])){
  //             result[i] += 1;
  //         }
  //     }
  // }
    console.log(result)
    const max = Math.max(...result)
  for(let i = 0; i < result.length; i++){
      if(result[i] === max){
          answer.push(i+1)
      }
  }
  return answer;
}
