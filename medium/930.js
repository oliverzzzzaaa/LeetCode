var numSubarraysWithSum = function(A, S) {
    let count = 0;
    for (let i = 0; i < A.length; i++) {
        let sum = 0
        for (let j = i; j < A.length; j++) {
            sum+=A[j];
            if (sum === S) {count++}
            if (sum > S) {break;}
        }
    }
    return count;
};

console.log(numSubarraysWithSum([1,0,1,0,1], 2))