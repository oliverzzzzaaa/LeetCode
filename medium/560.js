var subarraySum = function(nums, k) {
    let newmap = new Map()
    newmap.set(0,1)
    let count = 0;
    let sum = 0;
    nums.forEach(num => {
        sum+=num;
        if (newmap.get(sum - k)) {
            count+= newmap.get(sum-k)
        }
        newmap.set(sum, (newmap.get(sum) || 0)+1)
    })
    return count
};

// var subarraySum = function(nums, k) {
//     const map = new Map([[0, 1]]);
//     let sum = 0;
//     let total = 0;
//     for (let num of nums) {
//         sum = sum + num;
//         total += (map.get(k - sum) || 0);
//         console.log(map.get(sum))
//         map.set(sum, (map.get(sum) || 0) + 1);
//     }
    
//     return total;
// };

console.log(subarraySum([1,1,1], 2))