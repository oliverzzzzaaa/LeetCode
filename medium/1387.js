var getKth = function(lo, hi, k) {
    let arr = [];
    let h = {}
    for (let i = lo; i < hi+1; i++) {
        arr.push([i, dfs(i, h, 0)])
    }
    arr = arr.sort((a,b) => a[1] - b[1]);
    console.log(arr[k])
    return arr[k-1][0]
};

function dfs(num, h) {
    if (num === 1) {return 0}
    if (h[num]) {return h[num]}
    if (num % 2 === 0) {
        h[num] = 1 + dfs(num/2, h)
    } else {
        h[num] = 1 + dfs((num * 3) + 1, h)
    }
    return h[num];
}
console.log(getKth(10,20, 5))

