function stock_price_run(arr) {
    let longest = 1;
    let curr = 1;
    if (arr.length < 1) return 0;
    let i = 1;
    while (i < arr.length) {
        while (i < arr.length && arr[i] > arr[i-1]) {
            i++;
            curr++;
        }
        if (curr > longest) longest = curr;
        curr = 1;
        while (i < arr.length && arr[i] < arr[i-1]) {
            i++;
            curr++;
        }
        if (curr > longest) longest = curr;
        curr = 1;
        while (i < arr.length && arr[i] === arr[i-1]) {
            curr = 1;
            i++;
        }
    }
    return longest;
}


console.log(stock_price_run([3,2,2,1]))