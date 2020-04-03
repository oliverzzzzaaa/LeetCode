var coinChange = function(coins, amount) {
    let ans = dp(coins, amount, {})
    if (ans === Number.MAX_VALUE) {return -1}
    return ans
};

function dp(coins, amount, h) {
    if (amount === 0) {return 0}
    if (amount < 0) {return -1}
    if (h[amount]) {return h[amount]}
    let min = Number.MAX_VALUE
    let included = false;
    for (let i = 0; i < coins.length; i++) {
        let node = dp(coins,amount-coins[i], h)
        if (node < min && node > 0) {
            included = true;
            min = node
        }
    }
    h[amount] = min;
    return min
}

// console.log(coinChange([1,2,5], 11))
console.log(coinChange([2], 3))