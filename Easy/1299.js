var replaceElements = function(arr) {
    let newArr = Array.from(arr)
    mergeSort(newArr);
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === newArr[0]) {
            newArr.shift();
        }
        if (newArr.length > 0) {
            arr[i] = newArr[0]
        } else {
            arr[i] = -1;
        }
    }
    return arr
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
        if (arg1 < arg2) return 1;
        return -1;
    }
    let mid = Math.floor(arr.length / 2)
    let dup = arr.slice();
    let left = arr.slice(0, mid);
    let right = arr.slice(mid);
    return merge(mergeSort(left), mergeSort(right), callback)
}