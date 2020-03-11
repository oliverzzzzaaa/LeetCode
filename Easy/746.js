var minCostClimbingStairs = function(cost) {
    let h = {};
    return dp(cost, h)
};

function dp(cost, h) {
    console.log(cost)
    if (cost.length < 1) {return 0}
    if (h[cost.length]) {return h[cost.length]}
    let onestep = cost[0] + dp(cost.slice(1), h)
    let twostep = cost[1] + dp(cost.slice(2), h)
    let ideal = Math.min(onestep, twostep)
    h[cost.length] = ideal
    return ideal
}

// console.log(minCostClimbingStairs([10,15,20]))
console.log(minCostClimbingStairs([0,0,0,0]))