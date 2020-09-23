var findAndReplacePattern = function(words, pattern) {
    let toNum = [];
    let patternh = {};
    let uniq = 1;
    for (let i = 0; i < pattern.length; i++) {
        let char = pattern[i];
        if (!patternh[char]) {
            toNum.push(uniq);
            patternh[char] = uniq;
            uniq++;
        } else {
            toNum.push(patternh[char]);
        }
    }
    let res = [];
    words.forEach(word => {
        if (matchPattern(toNum, word)) {
            res.push(word);
        }
    });
    return res;
};

function matchPattern(pattern, word) {
    if (word.length !== pattern.length) return false;
    let h = {};
    let uniq = 1;
    for (let i = 0; i < word.length; i++) {
        let char = word[i];
        if (!h[char]) {
            h[char] = uniq;
            if (pattern[i] !== uniq) return false;
            uniq++;
        } else {
            // console.log(pattern[i], h[char])
            if (pattern[i] !== h[char]) return false;
        }
    }
    return true;
}