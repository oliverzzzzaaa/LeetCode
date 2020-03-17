var threeSumClosest = function(nums, target) {
    let h = {};
    if (nums.length < 1) {return 0}
    return dp(nums, target, 0, 0, h)
};

function dp(nums, target, curr, count, h) {
    if (count === 3) {return curr}
    if (nums.length < 1 && count !== 3) {return Number.MAX_VALUE}
    let key = `${nums.length}:${curr}:${count}`
    if (h[key]) {return h[key]}
    let incl = dp(nums.slice(1), target, curr+nums[0], count+1, h);
    let notincl = dp(nums.slice(1), target, curr, count, h);
    h[key] = (Math.abs(target-incl) < Math.abs(target-notincl) ? incl : notincl)
    return h[key]
}

console.log(threeSumClosest([0,2,1,-3], 1))
console.log([2,4,3,1].sort((a, b) => (a-b)))