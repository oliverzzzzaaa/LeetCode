// var subarraysDivByK = function(A, K) {
//     let count = 0;
//     if (A.length === 1) {return A[0] % K === 0 ? 1 : 0}
//     for (let i = 0; i < A.length; i++) {
//         let j = i+1;
//         let sum = A[i]
//         while (j <= A.length) {
//             if (sum % K === 0) {
//                 count++;
//             }
//             sum+=A[j];
//             j++;
//         }
//     }
//     return count;
// };

var subarraysDivByK = function(A, K) {
    let sum = 0;
    let dp = [A[0]];
    for (let i = 1; i < A.length; i++) {
        dp[i] = dp[i-1] + A[i];
    }
    console.log(dp)
}

console.log(subarraysDivByK([4,5,0,-2,-3,1], 5))