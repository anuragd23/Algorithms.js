class Solution {
    private int globalStart = 0, globalEnd = 0;
    public String longestPalindrome(String s) {
        
        if (s.length() < 2) return s;
        
        for (int i = 0; i < s.length(); i++) {
            findlongestSubstring(s, i, i);
            findlongestSubstring(s, i, i + 1);
        }
        
        return s.substring(globalStart, globalEnd);
    }
    
    public void findlongestSubstring(String s, int start, int end) {
        while (start >= 0 && end < s.length() && s.charAt(start) == s.charAt(end)) {
            start--;
            end++;
        }
        
        if (end - start + 1 > globalEnd - globalStart + 1) {
            globalStart = start + 1;
            globalEnd= end; 
        }
        
    }
}