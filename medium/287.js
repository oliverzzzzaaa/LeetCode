var findDuplicate = function(nums) {
    for (let i = 0; i < nums.length; i++) {
        while (nums[i] !== i+1) {
            let num = nums[i]
            if (nums[num-1] === nums[i]) {return nums[i]}
            [nums[num-1], nums[i]] = [nums[i], nums[num-1]]
        }
    }

};

// [0,1,2,3]
// [1,3,4,2,2]
// console.log(findDuplicate([1,3,4,2,2]))
console.log(findDuplicate([1,3,4,3,2]))