var scoreOfParentheses = function(S) {
    let layer = 0;
    let currScore = 0;
    let layerScore = new Array(S.length).fill(0);
    for (let i = 0; i < S.length; i++) {
        let char = S[i];
        if (char === "(") {
            layer++;
        } else if (char === ")") {
            layer--;
            if (layerScore[layer+1] > 0) {
                layerScore[layer] += layerScore[layer+1] * 2;
                layerScore[layer+1] = 0;
            } else {
                layerScore[layer]++;
            }
        }
    }
    // console.log(layerScore)
    return layerScore[0]
};

console.log(scoreOfParentheses("()()"))
console.log(scoreOfParentheses("(()(()))"))