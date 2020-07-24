function increasingSub(arr) {
    let lookup = new Array(arr.length);
    let max = 1;
    lookup.fill(1);
    for (let i = 1; i < arr.length; i++) {
        for (let j = 0; j < i; j++) {
            // lookup[i] = Math.max(lookup[j], lookup[i])
            if (arr[i] > arr[j]) lookup[i] = Math.max(lookup[i], lookup[j]+1);
            if (lookup[i] > max) max = lookup[i];
        }
    }
    // let max = 0;
    return max;
}

// console.log(increasingSub([1,2,1,2]))
console.log(increasingSub([-1,3,4,5,2,2,2,2]))