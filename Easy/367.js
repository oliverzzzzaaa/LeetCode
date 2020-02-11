var isPerfectSquare = function(num) {
    let i = 0;
    if (num === 1) {return true}
    while (i < num) {
        if (i * i === num) {
            return true;
        } else if (i * i > num) {
            return false
        }
        i+=1;
    }
};

console.log(isPerfectSquare(16))