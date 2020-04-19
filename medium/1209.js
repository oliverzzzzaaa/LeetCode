var removeDuplicates = function(s, k) {
    
    function dfs(s) {
        if (s.length < 1) {return s}
        let i = 0;
        let count = 0;
        let lastchar;
        while (i < s.length) {
            if (s[i] !== lastchar) {
                lastchar = s[i];
                i++;
                count = 1;
            } else {
                count++;
                i++;
                if (count === k) {
                    return dfs(s.slice(0,i-count).concat(s.slice(i)))
                }
            }
        }
        return s
    }
    return dfs(s)
};

console.log(removeDuplicates('deeedbbcccbdaa', 3))