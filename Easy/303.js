var NumArray = function(nums) {
    this.array = nums;
};

NumArray.prototype.sumRange = function(i, j) {
    // let newArray = this.array.slice(i, j+1)
    let count = 0;
    for (let x = i; i <= j; i++) {
      count += this.array[i]  
    }
    return count
};

var obj = new NumArray([-2, 0, 3, -5, 2, -1])
console.log(obj.sumRange(2,5))