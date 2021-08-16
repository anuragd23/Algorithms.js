//Given a binary search tree and a target node K. The task is to find the node with minimum absolute difference with given target value K.

import java.util.*;

class Program {
  public static int findClosestValueInBst(BST tree, int target) {
    // Write your code here.
		BST currentNode = tree;
		int closestValue = tree.value;
		
		while(currentNode != null) {
			if(Math.abs(target - closestValue ) > Math.abs(target - currentNode.value)) {
				closestValue  = currentNode.value;
			}
					
			if(target > currentNode.value) currentNode = currentNode.right;
			else currentNode = currentNode.left;
		}
    return closestValue;
  }

  static class BST {
    public int value;
    public BST left;
    public BST right;

    public BST(int value) {
      this.value = value;
    }
  }
}
