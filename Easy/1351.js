var countNegatives = function(grid) {
    let col = grid[0].length - 1;
    let row = grid.length - 1;
    let count = 0
    while (row >= 0) {
        col = grid[0].length - 1;
        while (col >= 0) {
            if (row < 0) {return count}
            if (grid[row][col] < 0) {
                count++;
                col--
            } else {
                if (row === 0) {return count}
                col = grid[0].length - 1;
                row--
            }
        }
        row--;
    }
    return count
};

console.log(countNegatives([[5,1,0],[-5,-5,-5]]))