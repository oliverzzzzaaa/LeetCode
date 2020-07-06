var combinationSum3 = function(k, n) {
    let nums = [1,2,3,4,5,6,7,8,9];
    let ans = [];
    function dfs(curr, currSum, currIdx) {
        if (curr.length === k) {
            if (currSum === n) ans.push(curr)
            return
        }
        if (currIdx >= nums.length) return
        if (currSum + nums[currIdx] <= n) {
            dfs(curr.concat(nums[currIdx]), currSum+nums[currIdx], currIdx+1)
        }
        dfs(curr, currSum, currIdx+1);
    }
    dfs([], 0, 0);
    return ans;
};

console.log(combinationSum3(3, 9))
