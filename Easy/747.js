var dominantIndex = function(nums) {
    let maxIdx = 0;
    let doubleArray = [];
    let max = nums[0];
    for (let i = 0; i < nums.length; i++) {
        doubleArray[i] = nums[i] * 2;
        if (nums[i] >= max) {
            max = nums[i];
            maxIdx = i;
        }
    }
    doubleArray[maxIdx] = doubleArray[maxIdx] / 2
    for (let i = 0; i < doubleArray.length; i++) {
        if (doubleArray[i] > max) {
            return -1
        }
    }
    return maxIdx
};