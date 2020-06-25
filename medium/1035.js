var maxUncrossedLines = function(A, B) {
    let mins = new Array(A.length);
    mins.fill(Number.MAX_VALUE);
    function dfs(aindex, bindex) {
        if (bindex === B.length || aindex == A.length) {return 0}
        let i = bindex;
        let draw = 0;
        if (A[aindex] === B[bindex]) {
            draw = 1 + dfs(aindex+1, bindex+1);
        }
        return Math.max(draw, dfs(aindex+1, bindex), dfs(aindex, bindex+1));
    }
    return dfs(0,0);
};
console.log(maxUncrossedLines(
    [1,3,7,1,7,5],
    [1,9,2,5,1]
))