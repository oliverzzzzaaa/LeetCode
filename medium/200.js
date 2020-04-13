// var numIslands = function(grid) {
//     let checked = {};
//     let count = 0;
//     for (let i = 0; i < grid.length; i++) {
//         for (let j = 0; j < grid[i].length; j++) {
//             if (grid[i][j] === '1') {
//                 checked[`${i},${j}`] = true;
//                 if ((!checked[`${i-1},${j}`] && !checked[`${i+1},${j}`]) 
//                 && (!checked[`${i},${j-1}`] && !checked[`${i},${j+1}`])) {
//                     count++;
//                 }
//             }
//         }
//     }  
//     return count;
// };

function numIslands(grid) {
    let count = 0;

    function dfs(i, j) {
        if ((i >= 0 && i < grid.length) && (j >= 0 && j < grid[i].length)) {
            if (grid[i][j] === '1') {
                grid[i][j] = '0';
                dfs(i+1, j)
                dfs(i-1, j)
                dfs(i, j+1)
                dfs(i, j-1)
            }
        }
    }
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === '1') {
                count++;
                dfs(i, j)
            }
        }
    }
    return count
}


console.log(numIslands([
    ["1","1","1"],
    ["0","1","0"],
    ["1","1","1"]]))
// console.log(numIslands([
//     [1,1,1,1,0],
//     [1,1,0,1,0],
//     [1,1,0,0,0],
//     [0,0,0,0,0]
// ]))

// console.log(numIslands([
//     [1,1,0,0,0],
//     [1,1,0,0,0],
//     [0,0,1,0,0],
//     [0,0,0,1,1]
// ]))