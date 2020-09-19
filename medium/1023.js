var camelMatch = function(queries, pattern) {
    let upperArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M",
    "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    let upper = new Set();
    upperArr.forEach(letter => upper.add(letter));
    console.log(isMatch("ControlPanel", "CooP", upper))
    // return queries.map(query => isMatch(query, pattern, upper))
};

function isMatch(word, pattern, upper) {
    if (word.length < pattern) return false;
    let patternidx = 0;
    let wordidx = 0;
    while (patternidx < pattern.length) {
        if (word[wordidx] === pattern[patternidx]) {
            wordidx++;
            patternidx++;
        } else {
            if (!upper.has(pattern[patternidx])) {
                return false;
            } else {
                while (wordidx < word.length && word[wordidx] !== pattern[patternidx]) {
                    if (upper.has(word[wordidx])) return false;
                    wordidx++;
                }
                if(wordidx === word.length) return false;
            }
        }
    }
    while (wordidx < word.length) {
        if (upper.has(word[wordidx])) return false;
        wordidx++;
    }
    return true;
}

console.log(camelMatch())

// ['FooBar']
// 'FoB