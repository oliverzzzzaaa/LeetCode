var carPooling = function(trips, capacity) {
    let h = {};
    for (let i = 0; i < trips.length; i++) {
        let trip = trips[i];
        let passengers = trip[0]
        let start = trip[1];
        let end = trip[2];
        if (!h[start]) {
            h[start] = passengers;
        } else {
            h[start]+=passengers;
        }
        if (!h[end]) {
            h[end] = -passengers;
        } else {
            h[end]-=passengers;
        }
    }
    // Object.values(h).forEach(num => {
    //     if (num > capacity) {
    //         return false;
    //     }
    // })
    let keys = [];
    Object.keys(h).forEach(key => {
        keys.push(parseInt(key))
    })
    let sorted = mergeSort(keys)
    let count = 0;
    let ret = true;
    sorted.forEach(stop => {
        count+=h[stop];
        if (count > capacity) {
            ret = false;
        }
    })
    return ret
};

function merge(arr1, arr2, callback) {
    let retarray = [];
    let retarraylen = arr1.length + arr2.length;
    while (retarray.length < retarraylen) {
        if (arr1.length < 1) {
            retarray = retarray.concat(arr2);
        } else if (arr2.length < 1) {
            retarray = retarray.concat(arr1);
        } else if (callback(arr1[0], arr2[0]) === 1) {
            retarray = retarray.concat(arr2[0]);
            arr2.shift();
        } else {
            retarray = retarray.concat(arr1[0]);
            arr1.shift();
        }
    }
    return retarray;
}

function mergeSort(arr) {
    if (arr.length <=1) {return arr};
    let callback = function(arg1, arg2) {
        if (arg1 > arg2) return 1;
        return -1;
    }
    let mid = Math.floor(arr.length / 2)
    let dup = arr.slice();
    let left = arr.slice(0, mid);
    let right = arr.slice(mid);
    return merge(mergeSort(left), mergeSort(right), callback)
}

console.log(carPooling([[2,1,5],[3,3,7]], 4))