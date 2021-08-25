import java.util.*;

class Program {
  // This is an input class. Do not edit.
  static class BinaryTree {
    public int value;
    public BinaryTree left = null;
    public BinaryTree right = null;

    public BinaryTree(int value) {
      this.value = value;
    }	
  }
	
	static class TreeInfo {
		public boolean isBalanced;
		public int height;
		
		public TreeInfo(boolean isBalanced, int height) {
			this.isBalanced = isBalanced;
			this.height = height;
		}
	}

  public boolean heightBalancedBinaryTree(BinaryTree tree) {
    // Write your code here.
		TreeInfo RootTreeInfo = getTreeInfo(tree);
    return RootTreeInfo.isBalanced;
  }
	
	public TreeInfo getTreeInfo(BinaryTree tree) {
		if (tree == null) return new TreeInfo(true, -1);
		
		TreeInfo LeftTreeInfo = getTreeInfo(tree.left);
		TreeInfo RightTreeInfo = getTreeInfo(tree.right);
		TreeInfo SelfTreeInfo = new TreeInfo(true, 0);
		
		SelfTreeInfo.isBalanced = (LeftTreeInfo.isBalanced && RightTreeInfo.isBalanced && Math.abs(LeftTreeInfo.height - RightTreeInfo.height) <= 1);
		SelfTreeInfo.height = Math.max(LeftTreeInfo.height, RightTreeInfo.height) + 1;
		
		return SelfTreeInfo;
	}
}
