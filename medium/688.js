var knightProbability = function(N, K, r, c) {
    let on = 0;
    if ((r >= N || r < 0) || (c >= N || c < 0)) {
        return 0
    } else if (K < 1) {
        return 1
    } else {
        let move1 = recProb(N, K-1, r+2, c+1);
        let move2 = recProb(N, K-1, r+2, c-1);
        let move3 = recProb(N, K-1, r-2, c+1);
        let move4 = recProb(N, K-1, r-2, c-1);
        let move5 = recProb(N, K-1, r+1, c+2);
        let move6 = recProb(N, K-1, r+1, c-2);
        let move7 = recProb(N, K-1, r-1, c+2);
        let move8 = recProb(N, K-1, r-1, c-2);
        on = move1 + move2 + move3 + move4 + move5 + move6 + move7 + move8
    }
    return on / (8 ** K)
};

const recProb = function(N, K, r, c) {
    let on = 0;
    if ((r >= N || r < 0) || (c >= N || c < 0)) {
        return 0
    } else if (K < 1) {
        return 1
    } else {
        let move1 = recProb(N, K-1, r+2, c+1);
        let move2 = recProb(N, K-1, r+2, c-1);
        let move3 = recProb(N, K-1, r-2, c+1);
        let move4 = recProb(N, K-1, r-2, c-1);
        let move5 = recProb(N, K-1, r+1, c+2);
        let move6 = recProb(N, K-1, r+1, c-2);
        let move7 = recProb(N, K-1, r-1, c+2);
        let move8 = recProb(N, K-1, r-1, c-2);
        on = move1 + move2 + move3 + move4 + move5 + move6 + move7 + move8
    }
    // return onoff;
    return on
}

console.log(knightProbability(3,2,0,0))