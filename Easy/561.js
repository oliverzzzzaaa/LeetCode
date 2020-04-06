var arrayPairSum = function(nums) {
    let sorted = nums.sort((a,b) => a-b);
    let i = 0;
    let count = 0
    while (i < sorted.length) {
        count+=sorted[i];
        i+=2;
    }
    return count
};