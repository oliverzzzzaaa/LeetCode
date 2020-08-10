// Two hashes to keep char count
// Iterate through Object.values and if not equal then delete one
// Iterate through Object.values for other and do the same

// Now only order matters

// Longest Common Subsequence

function delete_dist(str1, str2) {
    let totalcharlen = str1.length + str2.length;
    let visited = new Array(str1.length)
    visited.fill(0);
    function dfs(str1idx, str2idx, curr) {
        if (str1idx >= str1.length || str2idx >= str2.length) return 0
        // if (visited.has(curr)) return 0;
        // visited.add(curr)
        let char = str1[str1idx];
        let include = Number.MIN_VALUE;
        let notinclude = dfs(str1idx+1, str2idx, curr);
        while (str2[str2idx] !== char && str2idx < str2.length) {
            str2idx++;
        }
        if (str2idx === str2.length) {
            visited[str1idx] = Math.max(0, notinclude)
            // return Math.max(0, notinclude)
        } else {
            include = dfs(str1idx+1, str2idx+1, curr.concat(str1[str1idx])) + 1
            visited[str1idx] = Math.max(0, notinclude, include)
        }
        return visited[str1idx];
    }
    dfs(0, 0, "")
    return totalcharlen - (visited[0] * 2)
}

console.log(delete_dist("thought", "sloughs"))


function longest(arr) {
    let longest = 1;
    let curr = 1;
    for (let i = 1; i < arr.length; i++) {
        let num = arr[i];
        if (num !== arr[i-1]) {
            curr = 1;
        } else {
            curr++;
            longest = Math.max(curr, longest)
        }
    }
    return longest;
}