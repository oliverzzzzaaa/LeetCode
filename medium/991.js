var brokenCalc = function(X, Y) {
    let h = {};
    let visited = {};
    return dp(X, Y, h, visited)
};

function dp(X, Y, h, visited) {
    if (X === Y) {return 0}
    if (visited[X] || ((X < 0))) {return Number.MAX_VALUE}
    visited[X] = true;
    h[X] = 1 + Math.min(dp(X*2, Y, h, visited), dp(X-1, Y, h, visited))
    return h[X]
}

console.log(brokenCalc(3, 10))