function leftover(price, left) {
    let cost = 0;
    for (let i = 0; i < left.length; i++) {
        if (left[i] > 0) {
            cost += left[i] * price[i]
        }
    }
    return cost
}

var shoppingOffers = function(price, special, needs) {
    let mincost = leftover(price, needs);
    function dfs(left, idx) {
        if (idx >= price.length) return leftover(price, left);
        
    }

};



console.log(shoppingOffers([2,5], [[3,0,5],[1,2,10]], [3,2]))
// console.log(leftover([1,0], [2,2]))