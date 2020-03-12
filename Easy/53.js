var maxSubArray = function(nums) {
    let maxSum = nums[0]
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > sum + nums[i]) {
            sum = nums[i]
        } else {
            sum+=nums[i];
        }
        if (sum > maxSum) {maxSum = sum}
    }
    return maxSum
};


// console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))
    //6

console.log(maxSubArray([1,2]))
