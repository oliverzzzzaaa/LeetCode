var numEnclaves = function(A) {
    let count = 0;
    let visited = {};
    function dfs(i, j) {
        // if (A[i][j] !== 1) {return false}
        if (visited[`${i}:${j}`] !== undefined) {return visited[`${i}:${j}`]}
        if ((i+1 >= A.length || i-1 <= 0) || (j+1 >= A[i].length || j-1 <= 0)) {
            visited[`${i}:${j}`] = true;
            return true
        }
        let flag = false;
        if (A[i+1][j] === 1) {
            flag = flag || dfs(i+1, j)
        }
        if (A[i-1][j] === 1) {
            flag = flag || dfs(i-1, j)
        }
        if (A[i][j+1] === 1) {
            flag = flag || dfs(i, j+1)
        }
        if (A[i][j-1] === 1) {
            flag = flag || dfs(i, j-1)
        }
        visited[`${i}:${j}`] = flag;
        return flag;
    }  

    for (let i = 0; i < A.length; i++) {
        for (let j = 0; j < A[i].length; j++) {
            if (A[i][j] === 1 && !dfs(i,j)) {count++};
        }
    }
    return count
};



// [
//     [0,0,0,0],
//     [1,0,1,0],
//     [0,1,1,0],
//     [0,0,0,0]
// ]