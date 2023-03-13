function solution(nums) {
    var answer = 0;
    var array = [...new Set(nums)];
    if(nums.length/2 <= array.length){
        answer = nums.length/2;
    }else{
        answer = array.length
    }
    return answer;
}