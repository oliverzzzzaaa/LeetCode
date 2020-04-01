var findNumberOfLIS = function(nums) {
    if (nums.length < 1) {return 0}
    let longest = 1;
    let dp = new Array(nums.length)
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        dp[i] = 1;
        
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j]) {
                if (dp[i] === dp[j]+1) {
                    count++;
                    dp[i] = Math.max(dp[j]+1, dp[i])
                } else if 
            }
        }
        if (dp[i] > longest) {
            longest = dp[i]
        } else {
            count = 0;
        }
    }
    for (let i = 0; i < dp.length; i++) {
        if (dp[i] === longest) {count++}
    }
    console.log(dp)
    return count
};

console.log(findNumberOfLIS([1,3,5,4,7]))