var reverseString = function(s) {
    let end = s.length-1;
    let start = 0;
    while (start < end) {
        [s[start], s[end]] = [s[end], s[start]]
        start++;
        end--;
    }

};