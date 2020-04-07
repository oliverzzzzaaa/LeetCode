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
    console.log(h)
    Object.keys(h).forEach(key => {
        if (key === `${h[key]}`) {
            lucky = Math.max(lucky, h[key])
        }
    })
    return lucky
};

console.log(findLucky(
    [2,2,3,4]))