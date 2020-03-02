var isPowerfulInteger = function(x, y, num) {
    while (num % x === 0 || num % y === 0) {
        if (num % x === 0) {
            num = num / x;
        } else {
            num = num / y;
        }
    }
    if (num === 1 || num === 2) {return true}
    return false;
}

var powerfulIntegers = function(x, y, bound) {
    
};

console.log(isPowerfulInteger(2, 3, 10))