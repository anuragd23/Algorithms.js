//Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.


/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    if(nums.length === 1) return nums[0];
    let max = nums[0];
    let sum =  nums[0];
    
    for(let end = 1; end < nums.length; end++) {
        sum = Math.max(sum + nums[end], nums[end]);
        max = Math.max(max, sum);
    }
    return max;
};