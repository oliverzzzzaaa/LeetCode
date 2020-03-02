var addStrings = function(num1, num2) {
    const dict = {
        '0': 0,
        '1': 1,
        '2': 2,
        '3': 3,
        '4': 4,
        '5': 5,
        '6': 6,
        '7': 7,
        '8': 8,
        '9': 9
    }

    let carry = 1
    let sum = 0;
    for (let i = num1.length-1; i >= 0; i--) {
        sum += (dict[(num1[i])] * carry)
        carry *= 10;
    }
    carry = 1;
    for (let j = num2.length-1; j >= 0; j--) {
        sum += (dict[(num2[j])] * carry)
        carry *= 10;
    }
    
};

console.log(addStrings('122', '61'))