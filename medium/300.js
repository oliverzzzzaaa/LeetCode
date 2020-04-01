var lengthOfLIS = function(nums) {
    if (nums.length < 1) {return 0}
    let longest = 1;
    let dp = new Array(nums.length)
    // dp.fill(1);
    for (let i = 0; i < nums.length; i++) {
        dp[i] = 1;
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j]) {
                dp[i] = Math.max(dp[j]+1, dp[i])
            }
        }
        if (dp[i] > longest) {
            longest = dp[i]
        }
    }
    return longest;
};

console.log(lengthOfLIS([10,9,2,5,3,7,101,18]))