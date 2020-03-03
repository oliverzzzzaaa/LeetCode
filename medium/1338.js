var minSetSize = function(arr) {
    let dict = {};
    for (let i = 0; i < arr.length; i++) {
        if (dict[arr[i]]) {
            dict[arr[i]] += 1;
        } else {
            dict[arr[i]] = 1
        }
    }
    let vals = Object.values(dict).mergeSort()
    let count = 0;
    let total = 0;
    for (let i = 0; i < vals.length; i++) {
        total+=1;
        count += vals[i];
        console.log(count)
        if (count >= arr.length / 2) {
            return total;
        }
    }

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

Array.prototype.mergeSort = function(callback) {
    if (this.length <= 1) return this;
    callback = callback || function(arg1, arg2) {
        if (arg1 < arg2) return 1;
        return -1;
    }

    let mid = Math.floor(this.length / 2)
    let arr = this.slice();
    let left = this.slice(0,mid);
    let right = this.slice(mid);
    return merge(left.mergeSort(callback), right.mergeSort(callback), callback);
}

console.log(minSetSize(
    [3,3,3,3,5,5,5,2,2,7]))