var containsDuplicate = function(nums) {
    let set = new Set();
    let dup = false;
    nums.forEach(num => {
        if (set.has(num)) {
            dup = true;
        } else {
            set.add(num)
        }
    })
    return dup
};


console.log(containsDuplicate([1,2,3,1]))