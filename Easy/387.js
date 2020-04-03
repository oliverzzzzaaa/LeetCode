var firstUniqChar = function(s) {
    let h = {};
    for (let i = 0; i < s.length; i++) {
        let char = s[i]
        if (!h[char]) {
            h[char] = i;
        } else {
            h[char] = -1;
        }
    }
    let idx = Number.MAX_VALUE
    Object.values(h).forEach(val => {
        if (val !== -1) {
            idx = Math.min(idx, val)
        }
    })
    
};