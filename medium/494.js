var findTargetSumWays = function(nums, S) {
    let h = {};
    return dp(nums, S, h)
};

function dp(nums, S, h) {
    if (nums.length < 1) {
        if (S === 0) {return 1}
        return 0;
    }
    let key = `${nums.length}:${S}`
    if (h[key]) {return h[key]}
    let next = nums[0];
    h[key] =  dp(nums.slice(1), S-next, h) + dp(nums.slice(1), S+next, h)
    return h[key];
}

console.log(findTargetSumWays([1, 1, 1, 1, 1], 3))