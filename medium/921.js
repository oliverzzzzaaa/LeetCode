var minAddToMakeValid = function(S) {
    let needtobeOpened = 0;
    let needtobeClosed = 0;
    for (let i = 0; i < S.length; i++) {
        let char = S[i];
        if (char === "(") {
            needtobeClosed++;
        } else {
            if (needtobeClosed > 0) {
                needtobeClosed--;
            } else {
                needtobeOpened++;
            }
        }
    }
    return needtobeClosed + needtobeOpened
};

console.log(minAddToMakeValid("()))(("))
console.log(minAddToMakeValid("((("))