//You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most k times.

//Return the length of the longest substring containing the same letter you can get after performing the above operations.


/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(string, k) {
    if (string.length < k + 1) return string.length;
    let map = new Map();
    let longestLength = 0;
    let maxCharCount = 0;
    
    for(let start = 0, end = 0; end < string.length; end++) {
        map.set(string[end], map.get(string[end]) + 1 || 1);
        maxCharCount = Math.max(map.get(string[end]), maxCharCount);
        while (end + 1 - start - maxCharCount > k) {
            map.set(string[start], map.get(string[start]) - 1);
            start++;
        }
        longestLength = Math.max(longestLength, end + 1 - start);
    }
    return longestLength;
};