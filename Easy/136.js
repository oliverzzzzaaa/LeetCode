var singleNumber = function(nums) {
    let h = {};
    nums.forEach(num => {
        if (!h[num]) {
            h[num] = 1;
        } else {
            h[num]++;
        }
    })
    let single;
    Object.keys(h).forEach(key => {
        if (h[key] !== 2) {single = key}
    })
    return single
};

console.log(singleNumber([1,2,2]))