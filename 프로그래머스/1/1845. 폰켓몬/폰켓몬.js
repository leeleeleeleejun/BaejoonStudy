function solution(nums) {
    const set = new Set(nums);
    
    if(nums.length/2 >= set.size) return set.size

    return nums.length/2
}