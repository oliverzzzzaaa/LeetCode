var numIslands = function(grid) {
    // initilized lookup table with default of 0;
    let count = 0;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] !== '0') {
                count++;
                dfs(i,j)
            }
        }
    }
    function dfs(i, j) {
        if (i < 0 || j < 0 || i >= grid.length || j >= grid[0].length) {return}
        if (grid[i][j] === '0') {return}
        grid[i][j] = '0';
        dfs(i-1, j)
        dfs(i+1, j)
        dfs(i, j+1)
        dfs(i, j-1)
    }
    return count;
};
// 2 if land
// 1 if next to land


function fourDirection(grid, lookup, i, j) {

}

// console.log(numIslands([
//     ["1","1","1","1","0"],
//     ["1","1","0","1","0"],
//     ["1","1","0","0","0"],
//     ["0","0","0","0","0"]
// ]))

console.log(numIslands([
    ["1","1","0","0","0"],
    ["1","1","0","0","0"],
    ["0","0","1","0","0"],
    ["0","0","0","1","1"]]
))
// console.log(numIslands([
//     ["1","1","1"],
//     ["0","1","0"],
//     ["1","1","1"]]
// ))