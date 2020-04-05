var isAnagram = function(s, t) {
    let h = {};
    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        if (!h[char]) {
            h[char] = 1
        } else {
            h[char]++;
        }
    }
    for (let j = 0; j < t.length; j++) {
        let char = t[j];
        if (!h[char]) {
            return false;
        } else {
            h[char]--;
        }
    }
    return Object.values(h).every(val => val === 0)
};