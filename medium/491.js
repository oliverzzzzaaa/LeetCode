var findSubsequences = function(nums) {
    let ans = [];
    let set = new Set();
    function dfs(nums, idx, curr) {
        if (idx === nums.length) {return}
        if (nums[idx] >= curr[curr.length-1]) {
            let include = curr.concat(nums[idx])
            let currToString = include.toString()
            if (!set.has(currToString)) {
                ans.push(curr.concat(nums[idx]))
                set.add(currToString)
                dfs(nums, idx+1, curr.concat(nums[idx]))
            }
        }
        dfs(nums, idx+1, curr)
    }
    for (let i = 1; i < nums.length; i++) {
        dfs(nums, i, [nums[i-1]])
    }
    return ans
};



console.log(findSubsequences([4, 6, 7, 7]))

