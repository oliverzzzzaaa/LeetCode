var maximumProduct = function(nums) {
    let max1 = nums[0];
    let max2;
    let max3;
    let min1 = nums[0];
    let min2;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > max1) {
            max3 = max2;
            max2 = max1;
            max1 = nums[i];
        } else if (!max2 || nums[i] > max2) {
            max3 = max2;
            max2 = nums[i];
        } else if (!max3 || nums[i] > max3) {
            max3 = nums[i];
        }
        if (nums[i] < min1) {
            min2 = min1;
            min1 = nums[i]
        } else if (!min2 || nums[i] < min2) {
            min2 = nums[i];
        }
    }
    let positive = (max1 * max2 * max3);
    let negative = (max1 * min1 * min2);
    if (positive > negative) {
        return positive
    } else {
        return negative
    }
    // return Math.max([(max1 * max2 * max3), (max1 * min1 * min2)])
};

console.log(maximumProduct([1,2,3]))