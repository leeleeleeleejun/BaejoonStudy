function solution(absolutes, signs) {
    const a = absolutes.map((item, index)=> signs[index] ? item : item * -1)
    .reduce((a,b)=> a+b,0)
    return a;
}