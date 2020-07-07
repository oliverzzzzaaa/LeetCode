var hammingDistance = function(x, y) {
    let xString = x.toString(2);
    let yString = y.toString(2);
    let count = 0;
    let shorter = xString;
    let longer = yString;
    if (xString.length > yString) {
        shorter=yString;
        longer=xString;
    }
    // console.log(xString)
    // console.log("000" + yString)
    let shorterIdx = shorter.length-1;
    let longerIdx = longer.length-1;
    while (shorterIdx >= 0) {
        if (shorter[shorterIdx] !== longer[longerIdx]) count++;
        shorterIdx--;
        longerIdx--;
    }
    console.log(longer)
    while (longerIdx >=0) {
        if (longer[longerIdx] === '1') count++
        longerIdx--;
    }

    
    // for (let i = shorter.length-1; i>=0; i--) {
    //     if (xString[i] !== yString[i]) count++;
    // }
    // for (let i = 0; i < longer.length-shorter.length; i++) {
    //     if (longer[i] === '1') count++
    // }
    return count
};

console.log(hammingDistance(1501377268, 258791155));