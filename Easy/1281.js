var subtractProductAndSum = function(n) {
    let temp = n;
    let digits = [];
    while (temp > 9) {
        digits.push(temp % 10);
        temp = Math.floor(temp / 10);
    }
    console.log(digits)
    digits.push(temp);
    let prod = 1;
    let sum = 0;
    for (let i = 0; i < digits.length; i++) {
        prod *= digits[i];
        sum += digits[i];
    }
    return (prod - sum)
};

console.log(subtractProductAndSum(234))