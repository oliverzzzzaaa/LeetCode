var spiralOrder = function(matrix) {
    if (matrix.length < 1) return [];
    const res = [];
    const dirs = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    const range = [matrix[0].length, matrix.length - 1];
    let dir = 0, row = 0, col = -1;
    while (range[dir % 2] > 0) {
        for (let i = 0; i < range[dir % 2]; i++) {
            row += dirs[dir][0];
            col += dirs[dir][1];
            res.push(matrix[row][ccol]);
        }
        range[dir % 2]--;
        dir = (dir + 1) % 4;
    }
    return res;
};