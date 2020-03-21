// var trailingZeroes = function(n) {
//     let fac = factorial(n)
//     count = 0;
//     while (fac % 10 === 0) {
//         count++;
//         fac /= 10
//     }
//     return count
// };
var trailingZeroes = function(n) {
    var cur = 5,
        total = 0;
    
    while (cur <= n) {
        total += Math.floor(n / cur);
        cur *= 5;
    }
    
    return total;
};


function factorial(num) {
    let fac = 1;
    while (num > 1) {
        fac*= num;
        num--;
    }
    return fac;
}

console.log(factorial(30))
console.log(trailingZeroes(30))
// [5,10,15,20,25,30]
// [1,2,3,4,5,6]
