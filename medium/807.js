var maxIncreaseKeepingSkyline = function(grid) {
    let row = [];
    let col = [];
    for (let i = 0; i < grid.length; i++) {
        let rowmax = grid[i][0];
        for (let j = 0; j < grid[i].length; j++) {
            rowmax = Math.max(rowmax, grid[i][j]);
        }
        row[i] = rowmax;
    }
    for (let i = 0; i < grid[0].length; i++) {
        let colmax = grid[0][i];
        for (let j = 0; j < grid.length; j++) {
            colmax = Math.max(colmax, grid[j][i])
        }
        col[i] = colmax
    }
    let count = 0;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid.length; j++) {
            let newheight = Math.min(row[i], col[j])
            count = count + (newheight - grid[i][j])
        }
    }
    return count
};

console.log(maxIncreaseKeepingSkyline([[3,0,8,4],[2,4,5,7],[9,2,6,3],[0,3,1,0]]))