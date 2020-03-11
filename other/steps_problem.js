function numWays(N, options) {
    let h = {};
    return dp(N, options, h);
}

// N = steps to the end
function dp(N, options, h) {
    let count = 0;
    if (N < 0) {return 0}
    if (N === 0) {
        // console.log("OIFODFDKOF")
        return 1
    }
    if (h[N]) {return h[N]}
    options.forEach(option => {
        if (option <= N) {
            count += dp(N-option, options, h)
        }
    });
    h[N] = count;
    return count;
}

console.log(numWays(4, [1,2]))
