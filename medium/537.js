var complexNumberMultiply = function(a, b) {
    let arrA = a.split("+");
    let arrB = b.split("+");
    let ans = new Array(2);
    let one = parseInt(arrA[0]);
    let two = parseInt(arrA[1].slice(0, arrA[1].indexOf("i")))
    let three = parseInt(arrB[0]);
    let four = parseInt(arrB[1].slice(0, arrB[1].indexOf("i")))
    ans[0] = (one * three) - (two * four)
    ans[1] = (one * four) + (two * three)
    return ans.join("+").toString().concat("i")
};

// (1+i) * (1+i) = 0 + 2i
// (1-i) * (1-i) = 0 + -2i

console.log(complexNumberMultiply("1+2i", "1+2i"))