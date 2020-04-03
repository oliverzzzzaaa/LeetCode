// var rotate = function(nums, k) {
//     if (nums.length < 2) {return nums}
//     let ans = [];
//     let start = (nums.length - (k % nums.length)) % nums.length;
//     while (ans.length < nums.length) {
//         ans.push(nums[start])
//         start = (start+1) % nums.length
//     }
//     for (let i = 0; i < nums.length; i++) {
//         nums[i] = ans[i]
//     }
// };
var rotate = function(nums, k) {
    if (nums.length < 2) {return nums}
    let start = (nums.length - (k % nums.length)) % nums.length;
    let i = 0;
    while (i < nums.length) {
        
        i++;
    }
};

// [1,2,3,4,5,6,7,8]