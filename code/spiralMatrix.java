class Solution {
    public List<Integer> spiralOrder(int[][] matrix) {
        int top = 0;
        int bottom = matrix.length - 1;
        int left = 0;
        int right = matrix[0].length - 1;
        ArrayList<Integer> answer = new ArrayList<Integer>();
        int size = matrix.length * matrix[0].length;
        
        while (answer.size() < size) {
            for (int col = left; col <= right && answer.size() < size; col++) {
                answer.add(matrix[top][col]);
            }
            
            top++;
            
            for (int row = top; row <= bottom && answer.size() < size; row++) {
                answer.add(matrix[row][right]);
            }
            
            right--;
            
            for (int col = right; col >= left && answer.size() < size; col--) {
                answer.add(matrix[bottom][col]);
            }
            
            bottom--;
            
            for (int row = bottom; row >= top && answer.size() < size; row--) {
                answer.add(matrix[row][left]);
            }
            
            left++;
        }
        
        return answer;
    }
}