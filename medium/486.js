var PredictTheWinner = function(nums) {
    let res = dp(nums, 0, nums.length-1, 0, 0, 0)
    return (res[0] >= res[1])
};

function dp(nums, start, end, one, two, turn) {
    if (turn === nums.length) {
        return [one, two]
    }
    let takestart;
    let takeend;
    if (turn % 2 === 0) {
        takestart = dp(nums, start+1, end, one+nums[start], two, turn+1);
        takeend = dp(nums, start, end-1, one+nums[end], two, turn+1);
        if (takestart[0] > takeend[0]) {
            return takestart
        } else {
            return takeend
        }
        // return Math.max(dp(nums, start+1, end, one+nums[start], two, turn+1)[0], dp(nums, start, end-1, one+nums[end], two, turn+1)[0])
    } else {
        takestart = dp(nums, start+1, end, one, two+nums[start], turn+1);
        takeend = dp(nums, start, end-1, one, two+nums[end], turn+1);
        if (takestart[1] > takeend[1]) {
            return takestart
        } else {
            return takeend
        }
        // return Math.max(dp(nums, start+1, end, one, two+nums[start], turn+1)[1], dp(nums, start, end-1, one, two+nums[end], turn+1)[1])
    }
}
// function dp(nums, start, end, one, two, turn) {
//     if (turn === nums.length) {
//         console.log(nums, start, end, one, two, turn)
//         return (one >= two)
//     }
//     if (turn % 2 === 0) {
//         return dp(nums, start+1, end, one+nums[start], two, turn+1) || dp(nums, start, end-1, one+nums[end], two, turn+1)
//     } else {
//         return dp(nums, start+1, end, one, two+nums[start], turn+1) || dp(nums, start, end-1, one, two+nums[end], turn+1)
//     }
// }

console.log(PredictTheWinner([1, 5, 2]))