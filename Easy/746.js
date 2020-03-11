var minCostClimbingStairs = function(cost) {
    let h = {};
    let one = dp(cost.slice(1), h)
    let two = dp(cost.slice(2), h)
    return Math.min(one, two)

};

function dp(cost, h) {
    if (cost.length < 1) {return 0}
    if (h[cost.length]) {return h[cost.length]}
    let one = dp(cost.slice(1), h)
    let two = dp(cost.slice(2), h)
    let ideal = Math.min(one, two)
    h[cost.length] = cost[0] + ideal;
    return cost[0] + ideal;
}
console.log(minCostClimbingStairs([10,15,20]))
// console.log(minCostClimbingStairs([0,0,0,0]))