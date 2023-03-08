function solution(survey, choices) {
  var answer = '';
  var obj = { R: 0, T: 0, C: 0, F: 0, J: 0, M: 0, A: 0, N: 0 };
  survey = survey.map((i) => i.split(''));
  for (let i = 0; i < survey.length; i++) {
    if (choices[i] === 4) {
      continue;
    } else if (choices[i] < 4) {
      choices[i] === 1
        ? (obj[survey[i][0]] += 3)
        : choices[i] === 2
        ? (obj[survey[i][0]] += 2)
        : (obj[survey[i][0]] += 1);
    } else {
      choices[i] === 7
      ? (obj[survey[i][1]] += 3)
      : choices[i] === 6
      ? (obj[survey[i][1]] += 2)
      : (obj[survey[i][1]] += 1);
    }
  }
  answer =
  (obj.R >= obj.T ? 'R' : 'T') +
  (obj.C >= obj.F ? 'C' : 'F') +
  (obj.J >= obj.M ? 'J' : 'M') +
  (obj.A >= obj.N ? 'A' : 'N')
  return answer;
}