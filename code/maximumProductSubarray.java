class Solution {
    public int maxProduct(int[] nums) {
        int absoluteMax = nums[0];
        int minSoFar = nums[0];
        int maxSoFar = nums[0];
        
        for (int i = 1; i < nums.length; i++) {
            int current = nums[i];
            int tmp = minSoFar;
            minSoFar = Math.min(current, Math.min(minSoFar * current, maxSoFar * current));
            maxSoFar = Math.max(current, Math.max(tmp * current, maxSoFar * current));
            absoluteMax = Math.max(absoluteMax, maxSoFar);
        }
        
        return absoluteMax;
    }
}