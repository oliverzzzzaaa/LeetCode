var minMoves2 = function(nums) {
    nums = nums.sort();
    let med = Math.round(median(nums));
    let count = 0;
    nums.forEach(num => {
        count += Math.abs(med - num);
    })
    return count;
};

function median(nums) {
    let middle = Math.floor(nums.length / 2);
    if (nums.length % 2 === 0) {
        return (nums[middle] + nums[middle-1]) / 2
    } else {
        return nums[middle];
    }
}

[3,5,7,9]