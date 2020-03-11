// var numSubarrayProductLessThanK = function(nums, k) {
//     let h = {};
//     return dp(nums, k, h)
// };

// function dp(nums, k, h) {
//     console.log(nums, k)
//     if (nums.length < 1 && k > 1) {return 1}
//     if (k <= 1) {return 0}
//     let key = `${nums.length}:${k}`;
//     if (h[key]) {return h[key]}
//     let next = nums[0];
//     let curr;
//     if (next > k) {
//         curr = dp(nums.slice(1), k, h)
//     } else {
//         curr = dp(nums.slice(1), k / next, h) + dp(nums.slice(1), k, h)
//     }
//     // console.log(curr)
//     h[key] = curr;
//     return curr;
// }

var numSubarrayProductLessThanK = function(nums, k) {
    let start = 0;
    let end = 0;
    let product = nums[start];
    let count = 0;
    while (start < nums.length) {
        if (product >= k || end >= nums.length) {
            start++;
            end = start;
            product = nums[start];
        } else {
            count++;
            end++;
            product*=nums[end]
            
        }
    }
    return count
}




console.log(numSubarrayProductLessThanK([10,5,2,6], 100))