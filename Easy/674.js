var findLengthOfLCIS = function(nums) {
    if (nums.length < 1) {return 0}
    let longest = 1;
    let streak = 1;
    let dp = new Array(nums.length)
    dp.fill(1);
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > nums[i-1]) {
            dp[i] = dp[i-1]+1;
        }
        if (dp[i] > longest) {
            longest = dp[i]
        }
    }
    return longest
};