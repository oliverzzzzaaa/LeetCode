var productExceptSelf = function(nums) {
    let numZeroes = 0;
    let product = 1;
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        if (num === 0) {
            zeroes[i] = true;
            numZeroes++;
        } else {
            product *= num
        }
    }
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        if (num === 0) {
            if (numZeroes > 1) {
                nums[i] = 0
            } else {
                nums[i] = product
            }
        } else {
            if (numZeroes > 0) {
                nums[i] = 0
            } else {
                nums[i] = product / num
            }
        }
    }
    return nums
};