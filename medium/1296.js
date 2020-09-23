var isPossibleDivide = function(hand, W) {
    if (hand.length % W !== 0) return false;
    let h = {};
    hand.forEach(num => {
        if (!h[num]) h[num] = 0;
        h[num]++;
    });
    let keys = Object.keys(h).sort((a,b) => a-b);
    console.log(h)
    for (let i = 0; i < keys.length; i++) {
        let start = parseInt(keys[i]);
        while (h[start]) {
            if (!h[start]) continue;
            // console.log(h)
            for (let j = 0; j < W; j++) {
                if (!h[start]) return false;
                h[start]--;
                if (h[start] === 0) delete h[start];
                start++;
            }
            start =parseInt(keys[i]);
        }
    }
    // console.log(h)
    return Object.keys(h).length === 0;
};

// console.log(isPossibleDivide([1,2,3,3,4,4,5,6], 4))
console.log(isPossibleDivide([3,3,2,2,1,1], 3))