function solution(sides) {
    const a = sides.sort((a,b) => b-a);
    if(a[0] < a[1] + a[2]) {
        return 1
    } else {
        return 2
    };
}