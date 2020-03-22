var minSteps = function(s, t) {
    let shash = {};
    let thash = {};
    for (let i = 0; i < s.length; i++) {
        if (!shash[s[i]]) {
            shash[s[i]] = 1
        } else {
            shash[s[i]]++;
        }
        if (!thash[s[i]]) {thash[s[i]] = 0}
        if (!thash[t[i]]) {
            thash[t[i]] = 1;
        } else {
            thash[t[i]]++;
        }
    }
    let count = 0;
    Object.keys(shash).forEach(key => {
        if (shash[key] > thash[key]) {
            count += shash[key] - thash[key]
        }
    })
    return count
};

console.log(minSteps('leetcode','practice'))