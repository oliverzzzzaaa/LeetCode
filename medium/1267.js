var countServers = function(grid) {
    let count = 0;
    function dfs(currX, currY) {
        let increased = false;
        for (let i = 0; i < grid[currY].length; i++) {
            if (i === currX) continue;
            if (grid[currY][i] === 1) {
                console.log(i, j)
                count++;
                increased = true;
                grid[currY][i] = 0
            }
        }
        for (let i = 0; i < grid.length; i++) {
            if (i === currY) continue;
            console.log(currX, currY)
            if (grid[i][currX] === 1) {
                count++;
                increased = true;
                grid[i][currX] = 0;
            }
        }
        if (increased) count++;
    }
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === 1) dfs(j, i)
        }
    }
    return count
};

console.log(countServers([
    [1,0],
    [1,1]]))
// console.log(countServers([
//     [1,1,0,0],
//     [0,0,1,0],
//     [0,0,1,0],
//     [0,0,0,1]]))