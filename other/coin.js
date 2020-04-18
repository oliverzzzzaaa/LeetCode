function minCoins(coins, target) {
    let lookup = new Array(target+1).fill(target);
    lookup[0] = 0;
    for (let i = 1; i < target+1; i++) {
        let flag = lookup[i]
        coins.forEach(coin => {
            if (i - coin >= 0) {
                flag = Math.min(flag, 1 + lookup[i-coin]);
            }
        });
        lookup[i] = flag;
    }
    console.log(lookup)
    return lookup[target]
}


console.log(minCoins([5,1,2], 17))