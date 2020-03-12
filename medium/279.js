var numSquares = function(n) {
    let h = {};
    return dp(n, h)-1;
};

function dp(n, h) {
    if (n === 1) {return 1}
    if (h[n]) {return h[n]}
    let count = Number.MAX_VALUE;
    for (let i = n; i > 0; i--) {
        let temp = i ** 2
        if (temp < n) {
            let d = dp(n-temp, h)
            count = Math.min(count, d + 1)
        }
    }
    return count;
}

console.log(numSquares(12))
//3
console.log(numSquares(13))
//2