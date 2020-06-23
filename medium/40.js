var combinationSum2 = function(candidates, target) {
    let ans = [];
    let h = new Map();
    let sortedcandidates = candidates.sort((a,b) => a-b)
    function dfs(index, curr, currSum) {
        // console.log(curr)
        let currString = curr.toString()
        if (currSum > target) return
        if (currSum === target && !h.get(currString))  {
            ans.push(curr)
            h.set(currString, true)
            return
        }
        if (index === candidates.length) return
        dfs(index+1, curr.concat(candidates[index]), currSum+candidates[index])
        dfs(index+1, curr, currSum)
    }
    dfs(0, [], 0)
    return ans
};

// Santa Clara Family health Plan
// Anthem Blue Cross


// console.log(combinationSum2([1,2,3], 3))
console.log(combinationSum2([14,6,25,9,30,20,33,34,28,30,16,12,31,9,9,12,34,16,25,32,8,7,30,12,33,20,21,29,24,17,27,34,11,17,30,6,32,21,27,17,16,8,24,12,12,28,11,33,10,32,22,13,34,18,12]
    ,27))
// console.log(combinationSum2([10,1,2,7,6,1,5], 8))