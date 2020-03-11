//sets that sum up to 16

function sum(arr, target) {
    return recursive(arr, target, arr.length-1) 
}

function recursive(arr, target, i) {
    if (target === 0) {return 1}
    if (target < 0 || i < 0) {return 0}
    return recursive(arr.slice(0, i), target-arr[i], i-1) + recursive(arr.slice(0, i), target, i-1)
}

console.log(sum([2,4,6,10], 16))

function sumDP(arr, target) {
    mem = {};
    return dp(arr, target, arr.length-1, mem)
}

function dp(arr, target, i, mem) {
    key = `${i}:${target}`
    if (target === 0) {
        return 1
    } else if (target < 0 || i < 0) {
        return 0
    } else if (target < arr[i]){
        mem[key] = recursive(arr.slice(0, i), target, i-1, mem)
    } else if (!mem[key]) {
        mem[key] = recursive(arr.slice(0, i), target-arr[i], i-1, mem) + recursive(arr.slice(0, i), target, i-1, mem)
    }
    return mem[key];
}
console.log(sumDP([2,4,6,10], 16))