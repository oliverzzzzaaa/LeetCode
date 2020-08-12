var canConstruct = function(s, k) {
    if (k > s.length) return false;
    let h = {};
    let numOdd = 0;
    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        if (!h[char]) h[char] = 0;
        h[char]++;
        if (h[char] % 2 === 0) {
            numOdd--;
        } else {
            numOdd++;
        }
    }
    console.log(numOdd)
    return numOdd <= k
};

console.log(canConstruct("true",4))