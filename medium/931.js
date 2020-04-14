var minFallingPathSum = function(A) {
    let lookup = [];
    for (let i = 0; i < A.length-1; i++) {
        lookup.push(new Array(A[0].length))
    }
    lookup.push(A[A.length-1]);
    for (let i = A.length-2; i >= 0; i--) {
        for (let j = 0; j < A[i].length; j++) {
            let localmin = Number.MAX_VALUE;
            if (j-1 >= 0) {
                localmin = Math.min(localmin, lookup[i+1][j-1])
            }
            localmin = Math.min(localmin, lookup[i+1][j])
            if (j+1 < A[i].length) {
                localmin = Math.min(localmin, lookup[i+1][j+1])
            }
            lookup[i][j] = A[i][j] + localmin
        }
    }
    let absMin = lookup[0][0];
    for (let i = 0; i < lookup[0].length; i++) {
        absMin = Math.min(absMin, lookup[0][i])
    }
    return absMin
};

console.log(minFallingPathSum([[1,2,3],[4,5,6],[7,8,9]]))