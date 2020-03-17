var smallestDivisor = function(nums, threshold) {
    let origSum = 0;
    nums.forEach(num => {
        origSum+=num;
    })
    let start = Math.ceil(origSum / threshold);
    while (start > 0) {
        let newSum = 0;
        nums.forEach(num => {
            newSum += (Math.ceil(num / start))
        })
        if (newSum <= threshold) {
            return start
        }
        start++;
    }
};

console.log(smallestDivisor([1,2,5,9], 6))