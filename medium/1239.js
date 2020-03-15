var maxLength = function(arr) {
    let h = {};
    return dp(arr, h)
};

function dp(arr, h) {
    if (arr.length < 1) {return 0}
    let word = arr[0];
    let newH = Object.assign({}, h)
    let inc = canInc(word, h)
    let newlen = 0;
    if (inc) {
        for (let i = 0; i < word.length; i++) {
            let char= word[i];    
            newH[char] = true;
        }
        newlen = (word.length + dp(arr.slice(1), newH))
    }
    return Math.max(newlen, dp(arr.slice(1), h))
}

function canInc(word, h) {
    let newH = Object.assign({}, h)
    for (let i = 0; i < word.length; i++) {
        let char= word[i];
        if (newH[char]) {
            return false
        } else {
            newH[char] = true;
        }
    }
    return true
}

// console.log(maxLength(["un","iq","ue"]))
console.log(maxLength(["cha","r","act","ers"]))