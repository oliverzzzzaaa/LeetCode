var findLucky = function(arr) {
    let h = {};
    arr.forEach(num => {
        if (!h[num]) {
            h[num] = 1;
        } else {
            h[num]++;
        }
    })
    let lucky = -1;
    Object.keys(h).forEach(key => {
        if (key === h[key]) {
            lucky = Math.max(lucky, key)
        }
    })
    return lucky
};