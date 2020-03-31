var longestPalindrome = function(s) {
    let maxlen = [0,0];
    for (let i = 0; i < s.length; i++) {
        let start = i-1;
        let end = i+1
        while ((start >= 0 && end < s.length) && (s[start] === s[end])) {
            if (end - start > maxlen[1] - maxlen[0]) {
                maxlen[0] = start;
                maxlen[1] = end;
            }
            start--;
            end++;
        }
    }
    for (let i = 0; i < s.length; i++) {
        start = i;
        end = i+1;
        while ((start >= 0 && end < s.length) && (s[start] === s[end])) {
            if (end - start > maxlen[1] - maxlen[0]) {
                maxlen[0] = start;
                maxlen[1] = end;
            }
            start--;
            end++;
        }
    }
    return s.slice(maxlen[0], maxlen[1]+1)
};

function dp(s, start, end, h) {
    for (let i = 0; i < s.length; i++) {

    }
}

function isPalindrome(string) {
    let j = string.length-1
    for (let i = 0; i < string.length; i++) {
        if (string[i] !== string[j]) {return false}
        if (i >= j) {return true}
        j--;
    }
    return true;
}

// console.log(isPalindrome("ana"))
console.log(longestPalindrome("ccc"))