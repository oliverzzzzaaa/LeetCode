var minPathSum = function(grid) {
    let lookup = [];
    for (let i = 0; i < grid.length; i++) {
        lookup.push(new Array(grid[i].length))
    }
    for (let i = lookup.length-1; i >= 0; i--) {
        for (let j = lookup[i].length-1; j >= 0; j--) {
            let localmin = Number.MAX_VALUE;
            if (j+1 < lookup[i].length) {
                localmin = Math.min(localmin, lookup[i][j+1])
            }
            if (i+1 < lookup.length) {
                localmin = Math.min(localmin, lookup[i+1][j])
            }
            if (j+1 >= lookup[i].length && i+1 >= lookup.length) {
                lookup[i][j] = grid[i][j];
            } else {
                lookup[i][j] = grid[i][j] + localmin
            }
        }
    }
    return lookup[0][0];
};

console.log(minPathSum(
    [
        [1,3,1],
        [1,5,1],
        [4,2,1]
    ]
))