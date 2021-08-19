import java.util.*;

class Program {

  public char[] minimumCharactersForWords(String[] words) {
    // Write your code here.
		HashMap<Character, Integer> masterMap = new HashMap<Character, Integer>();
		for (int i = 0; i < words.length; i++) {
			HashMap<Character, Integer> currentMap = new HashMap<Character, Integer>();
			String currentString = words[i];
			for (int j = 0; j < currentString.length(); j++) {
				currentMap.put(currentString.charAt(j), currentMap.getOrDefault(currentString.charAt(j), 0) + 1);
				int updatedCount = Math.max(masterMap.getOrDefault(currentString.charAt(j), 0), currentMap.get(currentString.charAt(j)));
				masterMap.put(currentString.charAt(j), updatedCount);
			}
		}
		
		ArrayList<Character> charList = new ArrayList<Character>();
		for (Character c : masterMap.keySet()) {
			for (int i = 0; i < masterMap.get(c); i++) {
				charList.add(c);
			}
		}
		char[] answer = new char[charList.size()];
		
		for (int i = 0; i < charList.size(); i++) {
			answer[i] = charList.get(i);
		}
		
    return answer;
  }
}
