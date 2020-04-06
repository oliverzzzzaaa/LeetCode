var sortColors = function(nums) {
    let countSort = {};
    countSort[0] = 0;
    countSort[1] = 0;
    countSort[2] = 0;
    nums.forEach(num => {
        countSort[num]++;
    })
    for (let i = 0; i < nums.length; i++) {
        if (countSort[0] > 0) {
            nums[i] = 0;
            countSort[0]--;
        } else if (countSort[1] > 0) {
            nums[i] = 1;
            countSort[1]--;
        } else {
            nums[i] = 2;
            countSort[2]--;
        }
    }
};