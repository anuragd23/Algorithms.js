/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    if(nums.length < 3) return [];
    const result = [];
    nums = nums.sort((a, b) => a - b);
    for(let idx = 0; idx < nums.length - 2; idx++) {
        if(idx === 0 || (idx > 0 && nums[idx] !== nums[idx - 1])) {
            let start = idx + 1;
            let end = nums.length - 1;
            while(start < end) {
                let sum = nums[idx] + nums[start] + nums[end];
                if(sum === 0) {
                    result.push([nums[idx], nums[start], nums[end]]);
                    while(nums[start] === nums[start + 1]) {
                        start++;
                    };
                    while(nums[end] === nums[end - 1]) {
                        end--;
                    };  
                }
                if(sum < 0) start++;
                else end--;
            }
        }
    }
    return result;
};