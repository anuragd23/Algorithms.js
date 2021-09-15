/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    
    let start = 0;
    let end = height.length - 1;
    let currentArea = 0;
    let maxArea = -Infinity;
    
    while(start < end) {
        currentArea = Math.min(height[start], height[end]) * (end - start);
        maxArea = Math.max(maxArea, currentArea);
        if(height[end] > height[start]) start++;
        else end--;
    }
    return maxArea;
};