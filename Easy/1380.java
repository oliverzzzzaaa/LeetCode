class Solution {
    public List<Integer> luckyNumbers (int[][] matrix) {
        int[] rows = new int[matrix.length];
        int[] cols = new int[matrix[0].length];
        ArrayList<Integer> ans = new ArrayList<Integer>();
        Arrays.fill(cols, 0);
        for (int i = 0; i < matrix.length; i++) {
                int rowmin = matrix[i][0];
            for (int j = 0; j < matrix[i].length; j++) {
                if (matrix[i][j] <= rowmin) {
                    rowmin = matrix[i][j];
                }
                if (cols[j] < matrix[i][j]) {
                    cols[j] = matrix[i][j];
                }
            }
            rows[i] = rowmin;
        }
        for (int i = 0; i < matrix.length; i++) {
            for (int j = 0; j < matrix[i].length; j++) {
                if (matrix[i][j] <= rows[i] && matrix[i][j] >= cols[j]) {
                    ans.add(matrix[i][j]);
                }
            }
        }
        return ans;
    }
}