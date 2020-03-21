var trailingZeroes = function(n) {
    let fac = factorial(n)
    count = 0;
    while (fac % 10 === 0) {
        count++;
        fac /= 10
    }
    return count
};

function factorial(num) {
    let fac = 1;
    while (num > 1) {
        fac*= num;
        num--;
    }
    return fac;
}

console.log(factorial(25))
// [5,10,15,20,25,30]
// [1,2,3,4,5,6]
