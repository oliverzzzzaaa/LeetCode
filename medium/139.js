var wordBreak = function(s, wordDict) {
    let newDict = {};
    wordDict.forEach(word => {
        newDict[word] = true;
    })
    let works = false;
    for (let i = s.length; i >= 0; i--) {
        if (isWord(s.slice(0, i), newDict)) {
            if (s.slice(i).length < 1 || betterWordBreak(s.slice(i), newDict)) {
                works = true
            }
        }
    }
    return works

};

const betterWordBreak = function(s, newDict) {
    let works = false;
    for (let i = 0; i <= s.length; i++) {
        if (isWord(s.slice(0, i), newDict)){
            if (s.slice(i).length < 1 || betterWordBreak(s.slice(i), newDict)) {
                works = true;
            }
        }
    }
    return works
}

const isWord = function(string, newDict) {
    // console.log(newDict)
    if (newDict[string]) {
        return true;
    } else {
        return false;
    }
}

console.log(wordBreak("leetcode", ["leet","code"]))
// console.log(betterWordBreak("code", {'leet': true, 'code': true}))
// console.log(isWord('code', {'leet': true, 'code': true}))

// console.log(wordBreak("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab",
// ["a","aa","aaa","aaaa","aaaaa","aaaaaa","aaaaaaa","aaaaaaaa","aaaaaaaaa","aaaaaaaaaa"]))