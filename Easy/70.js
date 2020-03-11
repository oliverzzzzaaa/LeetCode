var climbStairs = function(n) {
    let h = {};
    return dp(n, h)
};

function dp(n, h) {
    if (n <= 1) {return 1}
    if (h[n]) {return h[n]}
    let one = dp(n-1, h)
    let two = dp(n-2,h)
    h[n] = one + two;
    return one + two;
}