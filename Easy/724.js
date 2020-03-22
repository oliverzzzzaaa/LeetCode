var pivotIndex = function(nums) {
    let sum = 0;
    if (nums.length < 1) {return -1}
    nums.forEach(num => {
        sum+=num;
    });
    let left = 0;
    for (let i = 0; i < nums.length; i++) {
        let thissum = sum - nums[i];
        if (thissum / 2 === left) {return i}
        left+=nums[i]
    }
    return -1
};

console.log(pivotIndex([1, 7, 3, 6, 5, 6]))
console.log(pivotIndex([-1,-1,-1,0,1,1]))
console.log(pivotIndex([1, 2, 3]))