var topKFrequent = function(words, k) {
    let h = {};
    words.forEach(word => {
        if (!h[word]) h[word] = 0;
        h[word]++;
    })
    let arr = [];
    Object.keys(h).forEach(key => {
        arr.push([key, h[key]]);
    })
    arr.sort((a, b) => {
        if (b[1] > a[1]) return 1
        if (b[1] < a[1]) return -1
        return a[0].localeCompare(b[0])
    })
    let res = [];
    for (let i = 0; i < k; i++) {
        res.push(arr[i][0])
    }
    return res
};

console.log(topKFrequent(["i", "love", "leetcode", "i", "love", "coding"], 2))