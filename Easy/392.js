var isSubsequence = function(s, t) {
    if (s.length < 1) {return true}
    if (s.length > t.length) {return false}
    for (let i = 0; i < t.length; i++) {
        if (t[i] === s[0]) {
            return isSubsequence(s.slice(1), t.slice(i+1))
        }
    }
    return false;
};

console.log(isSubsequence("leeeeetcode", "leeeetcode"))
