// var numberOfSubarrays = function(nums, k) {
//     let oddcount = 0;
//     let ans = 0;
//     for (let i = 0; i < nums.length; i++) {
//         oddcount = 0;
//         for (let j = i; j<nums.length; j++) {
//             if (nums[j] % 2 !== 0) oddcount++
//             if (oddcount === k) {
//                 ans++;
//             } else if (oddcount > k) {
//                 j = nums.length;
//             }
//         }
//     }
//     return ans
// };


var numberOfSubarrays = function(nums, k) {
    let oddcount = 0;
    let start = 0;
    let end = 0;
    let ans = 0;
    while (end < nums.length) {
        if (nums[end] % 2 !== 0) oddcount++
        while (oddcount > k) {
            if (nums[start] % 2 !== 0) {
                oddcount--;
                start++;
            } else {
                start++;
            }
            if (start >= nums.length) return ans
        }
        if (oddcount === k) {
            ans++;
            let minisub = start;
            while (nums[minisub] % 2 === 0 && minisub < nums.length) {
                ans++;
                minisub++;
            }
        }
        end++;
    }
    return ans
};

console.log(numberOfSubarrays([2,2,2,1,2,2,1,2,2,2], 2))