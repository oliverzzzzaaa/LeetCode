var uniquePaths = function(m, n) {
    let h = {};
    return dp(m, n, h)
};

function dp(m, n, h) {
    let key = `${m}:${n}`
    if (h[key]) {return h[key]}
    if (m <= 1 && n <= 1) {
        return 1;
    } else if (m <= 1) {
        h[key] = dp(m, n-1, h);
    } else if (n<=1) {
        h[key] = dp(m-1, n, h);
    } else {
        h[key] =  dp(m-1, n, h) + dp(m, n-1, h)
    }
    return h[key]
} 

console.log(uniquePaths(3, 2))