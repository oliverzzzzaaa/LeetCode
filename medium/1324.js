var printVertically = function(s) {
    let ans = [];
    // let sArray = s.split(" ");
    let i = 0;
    let j = 0;
    while (i < s.length) {
        if (s[i] === " ") {
            j = 0;
        } else {
            if (!ans[j]) {
                ans[j] = s[i];
                j++;
            } else {
                // console.log(ans[j], s[i])
                ans[j] = ans[j].concat(s[i]);
                j++;
            }
        }
        i++;
    }
    console.log(ans[2].length)
    return ans
};

console.log(printVertically("TO BE OR NOT TO BE"))