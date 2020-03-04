var findDuplicates = function(nums) {
    let hash = {};
    let i = 0;
    let unique = 0;
    while (i < nums.length) {
        if (hash[nums[i]] === 1) {
            nums[unique] = nums[i]
            unique+=1;
        } else if (!hash[nums[i]])  {
            hash[nums[i]] = 1;
        }
        i+=1;
    }
    nums.splice(unique)
    return nums
};