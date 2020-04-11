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
    return ans
}

console.log(freqKeywords(["anacell", "cetracular", "betacellular"], [
    "Anacell provides the best services in the city",
    "betacellular has awesome services",
    "Best services provided by anacell, everyone should use anacell",
  ], 2))