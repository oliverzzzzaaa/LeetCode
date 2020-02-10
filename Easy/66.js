    var plusOne = function(digits) {
        let newArray = digits;
        newArray[newArray.length - 1] = newArray[newArray.length-1] + 1; 
        for (let i = newArray.length - 1; i >= 0; i--) {
            if (i === 0 && newArray[i] > 9) {
                newArray.unshift(1)
                newArray[i+1] = 0;
            } else if (newArray[i] > 9) {
                newArray[i-1] = newArray[i-1] + 1;
                newArray[i] = 0;
            }
        }
        return newArray;
    };

console.log(plusOne([9,9]))