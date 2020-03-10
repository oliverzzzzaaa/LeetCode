var maximum69Number  = function(num) {
    let str = num.toString();
    str = str.replace('6', '9')
    return parseInt(str)
};

console.log(maximum69Number(6969))