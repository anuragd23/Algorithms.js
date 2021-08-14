//Given two strings s and t, return true if t is an anagram of s, and false otherwise.

class Solution {
    public boolean isAnagram(String s, String t) {
        
        if(s == null || t == null || s.length() != t.length()) return false;
        
        int[] alphabets = new int[26];
        
        for(int i = 0; i < s.length(); i++) {
            alphabets[s.charAt(i) - 'a']++;
        }
        
        for(int i = 0; i < t.length(); i++) {
            alphabets[t.charAt(i) - 'a']--;
            if(alphabets[t.charAt(i) - 'a'] < 0) return false;
        }
        
        for(int i = 0; i < alphabets.length; i++) {
            if(alphabets[i] != 0) return false;
        }
        return true;
    }
}