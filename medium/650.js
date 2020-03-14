var minSteps = function(n) {
    let h = {};
    if (n <= 1) {return 0}
    return 2 + dp(n, 1, 2, h)
};

// var minSteps = function(n) {
//     if (n <= 1) {return 0}
//     if (n === 2) {return 2}
//     let root = isRoot(n)
//     if (root) {}
//     if (n % 2 === 0) {
//         return n-1
//     } else {
//         return n;
//     }
// }

function dp(n, prev, curr, h){
    let key = `${prev}:${curr}`
    // console.log(curr)
    if (n === curr) {return 0}
    if (curr > n) {return Number.MAX_VALUE}
    if (h[key]) {
        return h[key]
    }
    let paste = 1 + dp(n, prev, curr+prev, h)
    let copy = 2 + dp(n, curr, curr + curr, h)
    // console.log(paste, copy)
    let move = Math.min(paste, copy)
    h[key] = move;
    return move
}

console.log(minSteps(7))
// console.log(minSteps(3));

// console.log(minSteps(10))

// "A" => 0
// "A" => 1
// "AA" => 2
// "AAA" => 3
// "AAAA" = 4
// "AAAAA" = 5

function isRoot(n) {
    let i = Math.floor(Math.sqrt(n));
    while (i > 1) {
        let test = n;
        while (test % i === 0 ) {
            test /= i;
        }
        if (test === 1) {return i}
        i-=1;
    }
}