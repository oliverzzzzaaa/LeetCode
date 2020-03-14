var minPathSum = function(grid) {
    let h = {};
    return dp(grid, [0,0], h)
};

function dp(grid, pos, h) {
    let key = `${pos[0]}:${pos[1]}`
    let finalpos = [pos.length-1, pos[pos.length-1].length];
    let currentval = grid[pos[0]][pos[1]];
    if (pos[0] === finalpos[0] && pos[1] === finalpos[1]) {
        h[key] = currentval;
    } else if (pos[0] === finalpos[0]) {
        h[key] = currentval + dp(grid, [pos[0], pos[1]+1], h)
    } else if (pos[1] === finalpos[1]) {
        h[key] = currentval + dp(grid, [pos[0]+1, pos[1]], h)
    } else {
        h[key] = currentval + Math.min(dp(grid, [pos[0], pos[1]+1], h), dp(grid, [pos[0]+1, pos[1]], h))
    }
    return h[key];
}

console.log(minPathSum([
    [1,3,1],
    [1,5,1],
    [4,2,1]
  ]))