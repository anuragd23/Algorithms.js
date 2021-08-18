//Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

class Solution {
    public boolean containsDuplicate(int[] nums) {
        HashSet<Integer> seen = new HashSet<Integer>();
        
        for(int i = 0; i < nums.length; i++) {
            if(seen.contains(nums[i])) return true;
            seen.add(nums[i]);
        }
        return false;
    }
}