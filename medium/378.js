var kthSmallest = function(matrix, k) {
    let row = Math.floor(k / matrix.length);
    let col = (k % matrix.length) - 1;
    return matrix[row][col];
};



 console.log(kthSmallest(
    [
        [ 1,  5,  9],
        [10, 11, 13],
        [12, 13, 15]
     ], 8
 ));