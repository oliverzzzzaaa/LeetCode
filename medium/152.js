var maxProduct = function(nums) {
    let positiveMax = nums[0];
    let negativeMax = nums[0];
    let max = nums[0];
    for (let i = 1; i < nums.length; i++) {
        let temp = positiveMax;
        positiveMax = Math.max(positiveMax * nums[i], negativeMax * nums[i], nums[i]);
        negativeMax = Math.min(negativeMax * nums[i], temp * nums[i], nums[i]);
        console.log(positiveMax)
        max = Math.max(positiveMax, max)
    }
    return max
};

console.log(maxProduct([2,3,-2,4]))