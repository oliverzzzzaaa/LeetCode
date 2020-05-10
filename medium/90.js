var subsetsWithDup = function(nums) {
    let h = {};
    let ans = [];
    function dp(index, curr) {
        if (index === nums.length) {
            let sorted = curr.sort((a,b) => a-b).join()
            if (h[sorted]) {
                return
            } else {
                h[sorted] = true;
                ans.push(curr)
            }
        } else {
            dp(index+1, curr.concat(nums[index]));
            dp(index+1, curr);
        }
    }
    dp(0, []);
    return ans;
};

console.log(subsetsWithDup([4,4,4,1,4]))
