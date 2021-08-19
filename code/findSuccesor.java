import java.util.*;

class Program {
  // This is an input class. Do not edit.
  static class BinaryTree {
    public int value;
    public BinaryTree left = null;
    public BinaryTree right = null;
    public BinaryTree parent = null;

    public BinaryTree(int value) {
      this.value = value;
    }
  }

  public BinaryTree findSuccessor(BinaryTree tree, BinaryTree node) {
    // Write your code here.
		if (node.right != null) return findLeftMostChild(node.right);
		else return findParent(node);
//    return null;
  }
	
	public static BinaryTree findLeftMostChild (BinaryTree node) {
		BinaryTree currentNode = node;
		while (currentNode.left != null) {
			currentNode = currentNode.left;
		}
		return currentNode;
	}
	
	public static BinaryTree findParent (BinaryTree node) {
		BinaryTree currentNode = node;
		while (currentNode.parent != null && currentNode == currentNode.parent.right) {
			currentNode = currentNode.parent;
		}
		return currentNode.parent;
	}
}
