var numMatchingSubseq = function(S, words) {
    let count = 0;
    let s = new Map();
    words.forEach(word => {
        if (s.has(word)) {
            if (s.get(word) === true) {
                count++
            }
        } else {
            if (isSubseq(S, word)) {
                count++;
                s.set(word, true)
            } else {
                s.set(word, false)
            }
        }
    })
    return count
};

function isSubseq(S, word) {
    let currIdx = 0;
    let wordIdx = 0;
    while (currIdx < S.length && wordIdx < word.length) {
        if (S[currIdx] === word[wordIdx]) {
            currIdx++;
            wordIdx++;
        } else {
            currIdx++;
        }
    }
    return wordIdx === word.length
}

console.log(isSubseq('abca', 'cba'))