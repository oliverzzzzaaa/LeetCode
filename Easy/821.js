var shortestToChar = function(S, C) {
    let indices = [];
    for (let i = 0; i < S.length; i++) {
        if (S[i] === C) {
            indices.push(i)
        }
    }
    let retArray = [];
    let j = 0;
    for (let i = 0; i < S.length; i++) {
        if (i > indices[j]) {
            j++;
        }
        let nextchar = indices[j] - i;
        let prevchar = i - indices[j-1]
        retArray.push(Math.min())
    }
};