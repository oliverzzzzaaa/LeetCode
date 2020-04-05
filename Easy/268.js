var missingNumber = function(nums) {
    if (nums.length === 1) {return nums[0] === 1 ? 0 : 1}
    let extra = nums.length;
    for (let i = 0; i < nums.length; i++) {
        while (nums[i] !== i) {
            if (nums[i] === nums.length) {
                extra = nums[i]
                break;
            } else {
                [nums[nums[i]], nums[i]] = [nums[i], nums[nums[i]]];
            }
        }
    }
    for (let j = 0; j < nums.length; j++) {
        if (nums[j] !== j) {return j}
    }
    return extra
};

console.log(missingNumber([3,0,1]))
console.log(missingNumber([9,6,4,2,3,5,7,0,1]))