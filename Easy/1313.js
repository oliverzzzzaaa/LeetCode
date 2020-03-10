var decompressRLElist = function(nums) {
    let retarray = [];
    i = 0
    while (i < nums.length) {
        let j = 0;
        while (j < nums[i]) {
            retarray.push(nums[i+1])
            j++;
        }
        i = i+2;
    }
    return retarray
};