import java.util.*;

class Program {

  public String reverseWordsInString(String string) {
    // Write your code here.
		char[] characters = string.toCharArray();
		characters = reverseCharArray(characters, 0, characters.length - 1); 
		int start = 0;
		int end = 0;
		
		while(start < characters.length) {
			end = start;
			while(end < characters.length && characters[end] != ' ') {
				end++;
			}
			characters = reverseCharArray(characters, start, end - 1);
			start = end + 1;
		}
		
    return new String(characters);
  }
	public char[] reverseCharArray(char[] array, int startIdx, int endIdx) {
		while (startIdx < array.length && startIdx < endIdx) {
			char temp = array[startIdx];
			array[startIdx] = array[endIdx];
			array[endIdx] = temp;
			startIdx++;
			endIdx--;
		}
		return array;
	} 
}
