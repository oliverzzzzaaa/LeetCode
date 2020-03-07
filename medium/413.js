var numberOfArithmeticSlices = function(A) {
    let start = 0;
    let end = start + 2;
    let count = 0;
    let diff = A[1] - A[0];
    while (true) {
        if (A[end] - A[end-1] === diff) {
            count+=1
        }
    }
};