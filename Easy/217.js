var containsDuplicate = function(nums) {
    let set = new Set();
    nums.forEach(num => {
        if (set.has(num)) {
            return true;
        } else {
            set.add(num)
        }
    })
    return false
};


console.log(containsDuplicate([1,2,3,1]))