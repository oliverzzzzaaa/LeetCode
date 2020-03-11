var maxProfit = function(prices) {
    let minprice = prices[0];
    let maxProfit = 0;

    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < minprice) {
            minprice = prices[i]
        } else if (prices[i] - minprice > maxProfit) {
            maxProfit = prices[i] - minprice
        }
    }
    return maxProfit
};

