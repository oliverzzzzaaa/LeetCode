var arrayNesting = function(nums) {
    let longest = 0;
    let lookup = new Array(nums.length);
    lookup.fill(0);
    function dfs(start = 0) {
        let set = new Set();
        let idx = start;
        let count = 1;
        while (!set.has(idx) && lookup[idx] < count) {
            set.add(idx);
            count++;
            lookup[idx] = count;
            idx = nums[idx];
            if (idx >= nums.length) return count
        }
        return count;
    }
    for (let i = 0; i < nums.length; i++) {
        dfs(i);
        if (lookup[i] > longest) longest = lookup[i]
    }
    return longest-1;
};

console.log(arrayNesting([5,4,0,3,1,6,2]))
