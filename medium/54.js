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


var spiral2 = function(n) {
    if (n < 1) {return []}
    let ret = [];
    for (let i = 0; i < n; i++) {
        let row = [];
        for (let j = 0; j < n; j++) {
            row.push(null)
        }
        ret.push(row)
    }
    let count = 1;
    for (let i = 0; i < n; i++) {
        ret[0][i] = count;
        count++;
    }
    let x = n-1;
    let y = 0;
    let dirs = [[1,0],[0,1],[-1,0],[0,-1]]
    let dir = 1;
    let layer = n-1;
    while (layer > 0) {
        for (let i = 0; i < layer; i++) {
            x += dirs[dir % 4][0]
            y += dirs[dir % 4][1]
            ret[y][x] = count;
            count++;
        }
        dir++;
        for (let i = 0; i < layer; i++) {
            x += dirs[dir % 4][0]
            y += dirs[dir % 4][1]
            ret[y][x] = count;
            count++;  
        }
        dir++;
        layer--;
        console.log(ret[2])
    }
    return ret;
}

// [1,2,3]
// [8,9,4]
// [7,6,5]

// [01,02,03,04]
// [12,13,14,05]
// [11,16,15,06]
// [10,09,08,07]

// [01,02,03,04,05]
// [16,17,18,19,06]
// [15,24,25,20,07]
// [14,23,22,21,08]
// [13,12,11,10,09]


console.log(spiral2(4))