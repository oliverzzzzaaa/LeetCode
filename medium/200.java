class Solution {
    public int numIslands(char[][] grid) {
        int count = 0;
        for (int i = 0; i < grid.length; i++) {
            for (int j = 0; j < grid[i].length; j++) {
                if (grid[i][j] == '1') {
                    count++;
                    dfs(i, j, grid);
                }
            }
        }
        return count;
        
    }
    public void dfs(int x, int y, char[][] grid) {
        if (grid[x][y] == '0') {
            return;
        } else {
            grid[x][y] = '0';
            if (x > 0) {
                dfs(x-1, y, grid);
            }
            if (x < grid.length-1) {
                dfs(x+1, y, grid);
            }
            if (y > 0) {
                dfs(x, y-1, grid);
            }
            if (y < grid[x].length-1) {
                dfs(x, y+1, grid);
            }
        }
    }
}