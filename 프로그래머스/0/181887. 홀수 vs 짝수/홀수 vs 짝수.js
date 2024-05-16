function solution(num_list) {
    const a = num_list.filter((item, index)=> index%2===0).reduce((a,b)=> a+b);
    const b = num_list.filter((item, index)=> index%2!==0).reduce((a,b)=> a+b);

    return a > b ? a : b;
}