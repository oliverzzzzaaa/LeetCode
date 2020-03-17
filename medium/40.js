var combinationSum2 = function(candidates, target) {
    return dp(candidates, target, [], 0)
};

function dp(candidates, target, curr, sum) {
    // if (sum === target) {return curr}
    // console.log(curr)
    if (candidates.length < 1) {return []}
    let nextnum = candidates[0]
    let incl = curr.concat(nextnum)
    if (sum + nextnum === target) {
        console.log(curr.concat(nextnum))
        return curr.concat(nextnum)
    } else {
        if (candidates.length > 1) {
            return [dp(candidates.slice(1), target, incl, sum+nextnum)].concat([dp(candidates.slice(1), target, curr, sum)])
        } else {
            return [];
        }
    }

}

console.log(combinationSum2([1,2,3], 3))