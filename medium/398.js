var Solution = function(nums) {
    this.nums = nums
    this.h = {};
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i]
        if (this.h[num]) {
            this.h[num].push(i)
        } else {
            this.h[num] = [i]
        }
    }
};


Solution.prototype.pick = function(target) {
    let idxArr = this.h[target]
    // console.log(idxArr)
    let idx = Math.floor(Math.random() * idxArr.length)
    return this.h[target][idx]
};

let solution = new Solution([1,2,3,3,3])
console.log(solution.pick(3))