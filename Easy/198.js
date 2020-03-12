var rob = function(nums) {
    let h = {};
    return dp(nums, h)
};

function dp(nums, h) {
    if (nums.length < 1) { return 0}
    if (h[nums.length]) {return h[nums.length]}
    let zero = nums[0] + dp(nums.slice(2), h)
    let one = nums[1] + dp(nums.slice(3), h) || Number.MIN_VALUE
    h[nums.length] = Math.max(zero, one)
    return h[nums.length];

}

console.log(rob([1,2,3,1]))
//4 (from 1 and 3)