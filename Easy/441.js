var arrangeCoins = function(n) {
    let k = 0

    while (true) {
        if (n >= k) {
            n-=k
            k+=1;
        } else {
            return k-1;
        }
    }
};