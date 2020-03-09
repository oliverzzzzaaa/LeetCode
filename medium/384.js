
var Solution = function(nums) {
    this.set = nums
    this.original = Array.from(nums)
};

Solution.prototype.reset = function() {
    return this.original
};

Solution.prototype.shuffle = function() {
    let newSet = new Set(this.set)
    let retArray = [];
    

};

