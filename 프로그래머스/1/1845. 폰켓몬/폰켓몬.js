function solution(nums) {
    const size = new Set(nums).size
    const COUNT = nums.length / 2
    return size > COUNT ? COUNT : size;
}