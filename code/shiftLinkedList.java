import java.util.*;

class Program {
  public static LinkedList shiftLinkedList(LinkedList head, int k) {
    // Write your code here.
		LinkedList tail = head;
		int length = 1;
		
		while (tail.next != null) {
			length++;
			tail = tail.next;
		}
		
		k = k % length;
		if (k == 0) return head;
		if (k > 0) k = length - k;
		else k = -k;
		
		System.out.println(k);
		
		int counter = 1;
		LinkedList newTail = head;
		
		while (counter != k) {
			newTail = newTail.next;
			counter++;
		}
		
		tail.next = head;
		head = newTail.next;
		newTail.next = null;
    return head;
  }

  static class LinkedList {
    public int value;
    public LinkedList next;

    public LinkedList(int value) {
      this.value = value;
      next = null;
    }
  }
}
