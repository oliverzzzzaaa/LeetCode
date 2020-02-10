var findErrorNums = function(nums) {
    let obj = {};
    let repeat;
    let missing;
    nums.forEach(num => {
        if (obj[num] !== undefined) {
            repeat = num
        } else {
            obj[num] = num;
        }
    })
    for (let i = 1; i < nums.length + 1; i++) {
        if (obj[i] === undefined) {
            missing = i
        }
    }
    return [repeat, missing]
};

console.log(findErrorNums([1,2,4,4]))