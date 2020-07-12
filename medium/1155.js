var numRollsToTarget = function(d, f, target) {
    let lookup = new Array(target)
    lookup.fill(0);
    let rolls = 0;
    function dfs(diceidx, curr) {
        if (diceidx >= d) {
            if (curr === target) rolls++;
            return;
        }
        if (lookup[diceidx])
        for (let i = 1; i <= f; i++) {
            dfs(diceidx+1, curr+i)
        }
    }
};