var knightDialer = function(N) {
    let pad = [];
    pad.push([1,2,3]);
    pad.push([4,5,6]);
    pad.push([7,8,9]);
    pad.push([false,true,false]);
    let count = 0;
    function dfs(movesleft, currX, currY) {
        if(movesleft === 0) return count++;
        if (!pad[currY][currX]) return;
        // UUL
        if (currY >= 2 && currX >= 1) {
            dfs(movesleft-1, currX-1, currY-2);
        }
        // UUR
        if (currY >= 2 && currX <= 1) {
            dfs(movesleft-1, currX+1, currY-2);
        }
        // ULL
        if(currY >= 1 && currX === 2) {
            dfs(movesleft-1, currX-2, currY-1);
        }
        // URR
        if (currY >= 1 && currX === 0) {
            dfs(movesleft-1, currX+2, currY-1);
        }
        // DLL
        if (currY <= 1 && currX === 2) {
            dfs(movesleft-1, currX-2, currY+1);
        }
        // DRR
        if (currY <= 1 && currX === 0) {
            dfs(movesleft-1, currX+2, currY+1);
        }
        // DDL
        if (currY <= 1 && currX >= 1) {
            dfs(movesleft-1, currX-1, currY+2);
        }
        // DDR
        if (currY <= 1 && currX <= 1) {
            dfs(movesleft-1, currX+1, currY+2)
        }
        return;
    }
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            dfs(N-1, j, i);
        }
    }
    dfs(N-1, 3, 1);
    return count;
};

console.log(knightDialer(3))