var searchInsert = function(nums, target) {
    let mid = Math.floor((nums.length / 2));
    let mid_num = nums[mid];
    if (nums.length <= 2) {
        if (target <= nums[0]) {
            return 0;
        } else if (target <= nums[1]) {
            return 1;
        } else {
            return nums.length;
        }
    }
    if (mid_num === target) {
        return mid
    }
    if (target < mid_num) {
        return searchInsert(nums.slice(0, mid), target)
    } else if (target > mid_num) {
        return mid + searchInsert(nums.slice(mid), target)
    } 
};

console.log(searchInsert([1,3,5,7,9], 1))


