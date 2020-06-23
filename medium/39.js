var combinationSum = function(candidates, target) {
    let ans = [];
    function dfs(currSum, curr, idx) {
        if (currSum > target) return
        if (currSum === target) ans.push(curr)
        for (let i = idx; i < candidates.length; i++) {
            dfs(currSum+candidates[i], curr.concat(candidates[i]), i)
        }
    }
    dfs(0, [], 0);
    return ans
};

console.log(combinationSum([2,3,6,7], 7))