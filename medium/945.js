var minIncrementForUnique = function(A) {
    let h = {};
    let count = 0;
    A.forEach(num => {
        while (h[num]) {
            count++;
            num++;
        }
        h[num] = true;
    })
    return count
};