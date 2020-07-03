var isNStraightHand = function(hand, W) {
    if (hand.length % W !== 0) return false
    hand = hand.sort();
    let h = {};
    hand.forEach(num => {
        if (!h[num]) {
            h[num] = 1;
        } else {
            h[num]++;
        }
    })
    
    return true
};

console.log(isNStraightHand([1,2,3,6,2,3,4,7,8], 3))