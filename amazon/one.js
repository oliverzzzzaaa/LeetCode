function freqKeywords(keywords, reviews, k) {
    let hash = {};
    keywords.forEach(key => {
        hash[key.toLowerCase()] = 0;
    })
    reviews.forEach(review => {
        review.split(" ").forEach(word => {
            let lowerWord = word.toLowerCase()
            if (hash[lowerWord] !== undefined) {
                hash[lowerWord]++;
            }
        })
    })
    let pairs = [];
    Object.keys(hash).forEach(key => {
        pairs.push([key, hash[key]])
    })
    pairs = pairs.sort((a,b) => b[1] - a[1])
    let ans =[];
    for (let i = 0; i < k; i++) {
        ans.push(pairs[i][0])
    }
    console.log(pairs)
    return ans
}

console.log(freqKeywords(["anacell", "betacellular", "cetracular", "deltacellular", "eurocell"], [
    "I love anacell Best services; Best services provided by anacell",
    "betacellular has great services",
    "deltacellular provides much better services than betacellular",
    "cetracular is worse than anacell",
    "Betacellular is better than deltacellular.",
  ], 2))