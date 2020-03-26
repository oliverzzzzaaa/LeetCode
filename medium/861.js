var matrixScore = function(A) {
    //togglerow
    let flipCol = [];
    let flipRow = [];
    for (let i = 0; i < A.length; i++) {
        flipCol[i] = A[i].slice();
        flipRow[i] = A[i].slice();
    }
    for (let i = 0; i < flipCol.length; i++) {
        let row = flipCol[i];
        if (row[0] === 1) {
            row[0] = 0;
        } else {
            row[0] = 1;
        }
    }
    for (let i = 0; i < flipRow.length; i++) {
        let row = flipRow[i];
        if (row[0] === 0) {
            for (let j = 0; j < row.length; j++) {
                if (row[j] === 1) {
                    row[j] = 0;
                } else {
                    row[j] = 1;
                }
            }
        }
    }
    console.log(flipRow)
    console.log(flipCol)
    return Math.max(countScore(flipRow), countScore(flipCol))
    // calculate flip rows
};

function countScore(A) {
    let score = 0;
    for (let i = 0; i < A.length; i++) {
        let multiplier = 1
        let row = A[i];
        for (let j = row.length-1; j >= 0; j--) {
            if (row[j] === 1) {
                score += (multiplier)
            }
            multiplier *= 2;
        }
    }
    return score
}

// console.log(countScore([[1,1,1,1],[1,0,0,1],[1,1,1,1]]))
console.log(matrixScore([[0,0,1,1],[1,0,1,0],[1,1,0,0]]))