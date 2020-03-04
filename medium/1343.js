var numOfSubarrays = function(arr, k, threshold) {
    let dSum = k * threshold;
    let start = 1;
    // let end = start + k;
    let count = 0;
    let sums = arr.slice(0,k).sum()
    if (sums >= dSum) {count+=1}
    for (let end = k; end < arr.length; end++) {
        sums = sums - arr[start-1] + arr[end]
        if (sums >= dSum) {count+=1}
        start +=1;
    }
    return count
};

Array.prototype.sum = function() {
    let sum = 0;
    this.forEach(ele => sum+= ele)
    return sum
}

console.log(numOfSubarrays([1,2,3,4,5], 1, 0))