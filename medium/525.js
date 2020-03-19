var findMaxLength = function(nums) {
    let ones = 0;
    let zeroes = 0;
    let idx = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1) {
            ones++;
        } else {
            zeroes++
        }
        if (ones === zeroes) {idx = i+1}
    }
    return idx  
};

console.log(findMaxLength([0,1,0]))