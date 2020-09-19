var getStrongest = function(arr, k) {
    arr.sort((a,b) => a-b);
    let m = arr[Math.ceil(arr.length/2)-1]
    arr.sort((a,b) => {
        let aval = Math.abs(a - m)
        let bval = Math.abs(b-m)
        // if (b === -7) console.log(bval, aval)
        if (aval > bval) {
            return -1;
        } else if (aval === bval) {
            return b-a;
        } else {
            return 1;
        }
    })
    // console.log(m, arr)
    return arr.slice(0,k)
};
