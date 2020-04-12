function zombies(grid) {
    let days = 0;
    function bfs(grid) {
        if (test(grid)) {
            return;
        }else {
            days++;
            bfs(nextDay(grid))
        }
    }
    bfs(grid)
    return days;
}

function nextDay(grid) {
    let newGrid = [];
    grid.forEach(row => {
        let newrow = [];
        row.forEach(ele => {
            newrow.push(ele)
        })
        newGrid.push(newrow)
    })
    for (let i = 0; i < newGrid.length; i++) {
        for (let j = 0; j < newGrid[0].length; j++) {
            let curr = grid[i][j];
            if (curr === 1) {
                if (i-1 >= 0) {
                    newGrid[i-1][j] = 1;
                }
                if (i+1 < newGrid.length) {
                    newGrid[i+1][j] = 1;
                }
                if (j+1 < newGrid[i].length) {
                    newGrid[i][j+1] = 1;
                }
                if ((j-1 >= 0)) {
                    newGrid[i][j-1] = 1;
                }
            }
        }
    }
    return newGrid
}

function test(grid) {
    return grid.every(row => row.every(item => item === 1))
}

console.log(zombies([
    [0, 1, 1, 0, 1],
    [0, 1, 0, 1, 0],
    [0, 0, 0, 0, 1],
    [0, 1, 0, 0, 0]]))
console.log(nextDay([
    [0, 1, 1, 0, 1],
    [0, 1, 0, 1, 0],
    [0, 0, 0, 0, 1],
    [0, 1, 0, 0, 0]]))
