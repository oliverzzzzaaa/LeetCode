    var containsNearbyDuplicate = function(nums, k) {
    let obj = {};
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i]
        if (!obj[num]) {
            obj[num] = [i]
        } else {
            for (let j = 0; j < obj[num].length; j++) {
                if (j - i >= k) {
                    return true;
                } 
            }
            obj[num].push(i)
        }
    }
    return false;
    };

console.log(containsNearbyDuplicate([1,2,3,1,2,3], 2))