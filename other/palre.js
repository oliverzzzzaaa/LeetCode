function palindromeRearranging(inputString) {
    let h = {};
    for (let i = 0; i < inputString.length; i++) {
        let char = inputString[i];
        if (!h[char]) h[char] = 0;
        h[char]++;
    }
    if (inputString.length % 2 === 0) {
        return Object.values(h).every(val => val % 2 === 0)
    } else {
        let used = false;
        let vals = Object.values(h);
        for (let i = 0; i < vals.length; i++) {
            if (vals[i] % 2 !== 0) {
                if (used) return false;
                used = true;
            }
        }
    }
    return true;
}