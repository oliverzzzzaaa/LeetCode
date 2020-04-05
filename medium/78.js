var subsets = function(nums) {
    let ans = [];
    function dp(nums, idx, curr, used) {
        if (idx === nums.length) {return ans.push(curr)}
        let key = curr.toString()
        if (!used.has(key)) {
            dp(nums, idx+1, curr.concat(nums[idx]), used.add(key))
            used.delete(key)
            dp(nums, idx+1, curr, used)
        }
        return
    }
    dp(nums, 0, [], new Set())
    return ans;
};

console.log(subsets([1,2,3]))