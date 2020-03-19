var minimumTotal = function(triangle) {
    let h = {};
    if (triangle.length < 1) {return 0}
    return dp(triangle, h, 0, 1, triangle[0][0])
};

function dp(triangle, h, curridx, currlevel, currsum) {
    if (currlevel >= triangle.length) {return currsum}
    let key = `${currsum}:${currlevel}:${curridx}`
    if (h[key]) {return h[key]}
    h[key] = Math.min(dp(triangle, h, curridx, currlevel+1, currsum+triangle[currlevel][curridx]),
        dp(triangle, h, curridx+1, currlevel+1, currsum+triangle[currlevel][curridx+1]));
    return h[key]

}

console.log(minimumTotal([
    [2],
   [3,4],
  [6,5,7],
 [4,1,8,3]
]))