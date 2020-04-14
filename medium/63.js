var uniquePathsWithObstacles = function(obstacleGrid) {   
    if (obstacleGrid[obstacleGrid.length-1][obstacleGrid[0].length-1] === 1) {return 0}
    let h = {};
    return dfs(0, 0, obstacleGrid)
    
};
function dfs(i, j, obstacleGrid) {
    if (obstacleGrid[i][j] === 1) {return 0}
    if (i === obstacleGrid.length-1 && j === obstacleGrid[i].length-1) {return 1}
    if ((i+1 < obstacleGrid.length && obstacleGrid[i+1][j] !== 1) && (j+1 < obstacleGrid[i].length && obstacleGrid[i][j+1] !== 1)) {
        return dfs(i+1, j, obstacleGrid) + dfs(i, j+1, obstacleGrid)
    } else if ((i+1 < obstacleGrid.length && obstacleGrid[i+1][j] !== 1)) {
        return dfs(i+1, j, obstacleGrid)
    } else if ((j+1 < obstacleGrid[i].length && obstacleGrid[i][j+1] !== 1)) {
        return dfs(i, j+1, obstacleGrid)
    }
    return 0;
}

console.log(uniquePathsWithObstacles([
    [0,0,0],
    [0,1,0],
    [0,0,0]
  ]))