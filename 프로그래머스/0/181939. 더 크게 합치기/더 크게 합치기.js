function solution(a, b) {
    const x = a + '' + b;
    const y = b + '' + a;
    return x > y ? Number(x) : Number(y);
}