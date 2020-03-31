var longestCommonSubsequence = function(text1, text2) {
    let shorter = text1;
    let longer = text2;
    if (text2.length >= text1.length) {
        shorter = text2;
        longer = text1;
    }
    
};

function dp(shorter, longer, shorteridx, longeridx, string) {
    if (shorteridx === shorter.length-1 || longeridx === longer.length-1) {return string.length}
    let longest = string;
    if (longer[longeridx] !== shorter[shorteridx]) {
        longest = Math.max(longest, dp(shorter, longer, shorteridx, longeridx+1, string));
    } else {
        longest = Math.max(
            dp(shorter, longer, shorteridx, longeridx, string)
        )
    }
}

// 'abcdefg'  'aceg'  'zbaxyd'