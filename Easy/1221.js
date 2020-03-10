var balancedStringSplit = function(s) {
    let countL = 0;
    let countR = 0;
    let count = 0;
    for (let i = 0; i < s.length; i++) {
        let char = s[i]
        if (char === "L") {
            countL++;
        } else {
            countR++;
        }
        if (countL === countR && countL + countR !== 0) {
            count++;
            countL = 0;
            countR = 0;
        }
    }
    return count
};