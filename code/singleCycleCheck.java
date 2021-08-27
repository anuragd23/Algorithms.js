import java.util.*;

class Program {
  public static boolean hasSingleCycle(int[] array) {
    // Write your code here.
		int startingIdx = 0;
		int currentIdx = startingIdx;
		int visited = 0;
		
		while (visited < array.length) {
			if (currentIdx == startingIdx && visited > 0) return false;
			visited++;
			currentIdx = jump(currentIdx, array); 
		}
    return currentIdx == startingIdx;
  }
	public static int jump(int currentIdx, int[] array) {
		int jumpIdx = array[currentIdx];
		currentIdx = (currentIdx + jumpIdx) % array.length;
		
		if (currentIdx >= 0) return currentIdx;
		else return currentIdx + array.length;
	}
}
