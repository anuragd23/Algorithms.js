
//Given a binary array nums and an integer k, return the maximum number of consecutive 1's in the array if you can flip at most k 0's.

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function(nums, k) {
    let maxLength = 0;
    let currentLength = 0;
    let zeroTracker = [];
    let zeroPointer = 0;
    
    for (let start = 0, end = 0; end < nums.length; end++) {
        if(nums[end] === 1) currentLength++;
        else zeroTracker.push(end);
        
        while(end + 1 - start - currentLength > k) {
            currentLength = currentLength - (zeroTracker[zeroPointer] - start);
            start = zeroTracker[zeroPointer] + 1;
            zeroPointer++;
        }
        maxLength = Math.max(end + 1 - start, maxLength);
    }
    return maxLength;
};