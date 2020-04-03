var isAnagram = function(s, t) {
    let h = {};
    s.forEach(char => {
        if (!h[char]) {
            h[char] = 1
        } else {
            h[char]++;
        }

    })
    t.forEach(char => {
        if (!h[char]) {
            return false;
        } else {
            h[char]--;
        }
    })
    Object.values(h).every(val => val === 0)
};