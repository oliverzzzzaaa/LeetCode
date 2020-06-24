class Solution {
    public int findCircleNum(int[][] M) {
        int count = 0;
        for (int i = 0; i < M.length; i++) {
            for (int j = 0; j < M[i].length; j++) {
                if (M[i][j] == 1) {
                    count++;
                    circle(i,j,M);
                }
            }
        }
        return count;
    }
    
    public void circle(int x, int y, int[][] grid) {
        if (grid[x][y] == 0) {
            return;
        }
        grid[x][y] = 0;
        for (int i = 0; i < grid.length; i++) {
            circle(x,i,grid);
            circle(i, y, grid);
        }
        return;
    }
}