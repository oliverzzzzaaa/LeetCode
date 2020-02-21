var findMaxAverage = function(nums, k) {
    let maxSum = 0;
    for (let i = 0; i < k; i++) {
        maxSum += nums[i];
    }
    if (nums.length === k) {return maxSum / k}
    let sum = maxSum;
    let arr = nums.slice(0, k)
    for (let j = k; j < nums.length; j++) {
        sum -= nums[j-k];
        sum += nums[j]
        if (sum > maxSum) {
            maxSum = sum;
        }
    }
    return maxSum / k
};

console.log(findMaxAverage([1,12,-5,-6,50,3], 4))