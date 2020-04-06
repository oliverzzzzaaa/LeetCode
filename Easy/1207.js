var uniqueOccurrences = function(arr) {
    let h = {};
    arr.forEach(arr => {
        if (!h[arr]) {
            h[arr] = 1;
        } else {
            h[arr]++;
        }
    })
    let s = new Set();
    let repeated = true;
    Object.values(h).forEach(val => {
        if (s.has(val)) {
            repeated = false;
        } else {
            s.add(val)
        }
    })
    return repeated
};

console.log(uniqueOccurrences([1,2]))