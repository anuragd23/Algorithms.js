/*
You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security systems connected and it will automatically contact the police if two adjacent houses were broken into on the same night.

Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.
*/

class Solution {
    public int rob(int[] nums) {
        if (nums.length == 1) return nums[0];
        
        int first = nums[0];
        int second = Math.max(nums[1], first);
        
        for (int i = 2; i < nums.length; i++) {
            int tmp = second;
            second = Math.max(nums[i] + first, second);
            first = tmp;
        }
        
        return second;      
    }
}