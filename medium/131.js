var partition = function(s) {
    return dp(s, "")
};

function dp(s, curr) {
    console.log(curr)
    if (s.length < 1) {
        if (isPal(curr)) {
            return curr;
        } else {
            return null;
        }
    } else {
        if (isPal(curr)) {
            return [curr].concat(dp(s.slice(1), curr.concat(s[0])))
        } else {
            return [dp(s.slice(1), curr.concat(s[0]))]
        }
    }
}

function isPal(str) {
    if (str.length <1) {return false}
    let start = 0
    let end = str.length-1;
    while (start < end){
        if (str[start] !== str[end]) {
            return false;
        }
        start++;
        end--;
    }
    return true;
}

console.log(('aab'))