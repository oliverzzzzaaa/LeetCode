var NumArray = function(nums) {
    this.array = nums;
};

/** 
 * @param {number} i 
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function(i, j) {
    let newArray = this.array.slice(i, j)
    let count = 0;
    for (let i = 0; i < newArray.length; i++) {
      count += newArray[i]  
    }
    return count
};