var countGoodTriplets = function(arr, a, b, c) {
    let count = 0;
    for (let i = 0; i < arr.length-2; i++) {
        let first = arr[i];
        for (let j = i+1; j < arr.length-1; j++) {
            let second = arr[j];
            if (Math.abs(first - second) <= a) {
                for (let x = j+1; x < arr.length; x++) {
                    let third = arr[x];
                    if (Math.abs(second - third) <= b && Math.abs(first - third) <= c) {
                        console.log(first, second, third)
                        count++;
                    } 
                }
            }
        }
    }
    return count;
};

console.log(countGoodTriplets([3,0,1,1,9,7],7,2,3));