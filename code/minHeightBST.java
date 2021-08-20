import java.util.*;

class Program {
  public static BST minHeightBst(List<Integer> array) {
    // Write your code here.
		return constructMinHeightBst(array, 0, array.size() - 1, null);
  }
	
	public static BST constructMinHeightBst(List<Integer> array, int start, int end, BST bst) {
		if (start > end) {
			return null;
		}
		else {
			int mid = (start + end) / 2;
			
			if (bst == null) bst = new BST(array.get(mid));
			else bst.insert(array.get(mid));	
			constructMinHeightBst(array, start, mid - 1, bst);
			constructMinHeightBst(array, mid + 1, end, bst);
		}
		return bst;
	}

  static class BST {
    public int value;
    public BST left;
    public BST right;

    public BST(int value) {
      this.value = value;
      left = null;
      right = null;
    }

    public void insert(int value) {
      if (value < this.value) {
        if (left == null) {
          left = new BST(value);
        } else {
          left.insert(value);
        }
      } else {
        if (right == null) {
          right = new BST(value);
        } else {
          right.insert(value);
        }
      }
    }
  }
}
