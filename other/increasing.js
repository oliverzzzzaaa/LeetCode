function almostIncreasingSequence(nums) {
    let sorted = [...nums]
    sorted.sort((a,b) => a-b);
    for (let i = 0; i < sorted.length; i++) {
        // console.log(nums, sorted)
        let curr = sorted[i];
        if (nums[i-1] === curr) {
            nums[i-1] = false;
        } else if (nums[i] === curr) {
            nums[i] = false;
        } else if (nums[i+1] === curr) {
            nums[i+1] = false;
        } else {
            return false;
        }
        
        // if (nums[i-1] !== curr && nums[i+1] !== curr && nums[i] !== curr) return false;
    }
    return true;
}

console.log(almostIncreasingSequence([1,2,1,2]))

var findLengthOfLCIS = function(nums) {
    if (nums.length < 1) {return 0}
    let longest = 1;
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

console.log(findLengthOfLCIS([1,2,5,3,5]))
