function deletion_dist(str1, str2) {
    let totalcharlen = str1.length + str2.length
    let visited = new Array(str1.length);
    visited.fill(0);
    function dfs(str1idx, str2idx) {
        if (str1idx >= str1.length || str2idx >= str2.length) return 0;
        let include = Number.NEGATIVE_INFINITY;
        let notinclude = dfs(str1idx+1, str2idx);
        let char = str1[str1idx];
        while (str2[str2idx] !== char && str2idx < str2.length) {
            str2idx++;
        }
        if (char === str2[str2idx]){
            include = 1 + dfs(str1idx+1, str2idx)
            visited[str1idx] = Math.max(include, notinclude, 0);
        } else {
            visited[str1idx] = Math.max(0, notinclude)
        }
        return visited[str1idx];
    }
    dfs(0,0);
    return totalcharlen - (visited[0] * 2)
}

console.log(deletion_dist("thought", "sloughs"))


function bracket_match(bracket_string) {
    let open = 0;
    let closed = 0;
    for (let i = 0; i < bracket_string.length; i++) {
        let char = bracket_string[i];
        if (char === "(") {
            open++;
        } else if (char === ")") {
            if (open > 0) {
                open--
            } else {
                closed++;
            }
        }
    }
    return open + closed;
}