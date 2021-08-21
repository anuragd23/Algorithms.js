import java.util.*;

class Program {
  public static String longestPalindromicSubstring(String str) {
    // Write your code here.
		int[] odd = new int[2];
		int[] even = new int[2];
		int[] maxLength = new int[] {0, 1};
		int[] currentLength = new int[2];
		
		for (int i = 1; i < str.length(); i++) {
			odd = returnLongestSubstring(str, i - 1, i + 1);
			even = returnLongestSubstring(str, i - 1, i);
			
			if (odd[1] - odd[0] > even[1] - even[0]) currentLength = odd;
			else currentLength = even;
			
			if(currentLength[1] - currentLength[0] > maxLength[1] - maxLength[0]) maxLength = currentLength;
		}
    return str.substring(maxLength[0], maxLength[1]);
  }
	
	public static int[] returnLongestSubstring(String str, int start, int end) {
		while (start > -1 && end < str.length() && str.charAt(start) == str.charAt(end)) {
			start--;
			end++;
		}
		return new int[] {start + 1, end};
	}
}