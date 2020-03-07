var knightProbability = function(N, K, r, c) {
    let memo = {}
    let on = 0;
    if ((r >= N || r < 0) || (c >= N || c < 0)) {
        return 0
    } else if (K < 1) {
        return 1
    } else {
        let move1 = recProb(N, K-1, r+2, c+1, memo);
        let move2 = recProb(N, K-1, r+2, c-1, memo);
        let move3 = recProb(N, K-1, r-2, c+1, memo);
        let move4 = recProb(N, K-1, r-2, c-1, memo);
        let move5 = recProb(N, K-1, r+1, c+2, memo);
        let move6 = recProb(N, K-1, r+1, c-2, memo);
        let move7 = recProb(N, K-1, r-1, c+2, memo);
        let move8 = recProb(N, K-1, r-1, c-2, memo);
        on = move1 + move2 + move3 + move4 + move5 + move6 + move7 + move8
    }
    return on / (8 ** K)
};

const recProb = function(N, K, r, c, memo) {
    if (memo[`${K}:${r},${c}`]) {
        return memo[`${K}:${r},${c}`]
    }
    let on = 0;
    if ((r >= N || r < 0) || (c >= N || c < 0)) {
        return 0
    } else if (K < 1) {
        return 1
    } else {
        let move1 = recProb(N, K-1, r+2, c+1, memo);
        let move2 = recProb(N, K-1, r+2, c-1, memo);
        let move3 = recProb(N, K-1, r-2, c+1, memo);
        let move4 = recProb(N, K-1, r-2, c-1, memo);
        let move5 = recProb(N, K-1, r+1, c+2, memo);
        let move6 = recProb(N, K-1, r+1, c-2, memo);
        let move7 = recProb(N, K-1, r-1, c+2, memo);
        let move8 = recProb(N, K-1, r-1, c-2, memo);
        on = move1 + move2 + move3 + move4 + move5 + move6 + move7 + move8
    }
    // return onoff;
    memo[`${K}:${r},${c}`] = on
    return on
}

console.log(knightProbability(3,2,0,0))