
function countPairs(numbers, k) {
    // Write your code here
    let set = new Set();
    let count = 0;
    let sortednums = numbers.sort((a,b) => a-b);
    // sort the nums so you can use pairs from the left and right most sides
    // and travel inwards 
    for (let i = 0; i < sortednums.length; i++) {
        let lastidx = numbers.length-1;
        let a = sortednums[i]
        while (sortednums[lastidx] - a >= k) {
            if (sortednums[lastidx] - a === k && !set.has(`${a}:${sortednums[lastidx]}`)) {
                set.add(`${a}:${sortednums[lastidx]}`)
                count++;
            }
            lastidx--;
        }
    }
    return count
}

console.log(countPairs([6,1,1,2,2,3,3], 1))