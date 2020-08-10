var longestCommonSubsequence = function(str1, str2) {
    let shortString = str1;
    let longString = str2;
    if (str1.length > str2.length) {
        shortString = str2;
        longString = str1;
    }
    function dfs(shortStringidx, longStringidx, currLen) {
        if (shortStringidx === shortString.length || longStringidx === longString.length) return currLen
        let nextchar = shortString[shortStringidx];
        let notinclude = dfs(shortStringidx+1, longStringidx, currLen)
        while (longString[longStringidx] !== nextchar && longStringidx < longString.length) {
            longStringidx++;
        }
        if(longStringidx === longString.length) return notinclude;
        let include = dfs(shortStringidx+1, longStringidx+1, currLen+1);
        return Math.max(include, notinclude)
    }
    return dfs(0,0,0)
};
// 'abcdefg'  'aceg'  'zbaxyd'

console.log(longestCommonSubsequence("bsbininm",
"jmjkbkjkv"))