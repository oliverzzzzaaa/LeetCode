var partitionLabels = function(S) {
    if (S.length < 1) {return []}
    if (S.length < 2) {return [1]}
    let start = 0;
    // let end = start+1;
    let ans = [];
    while (start < S.length) {
        let end = S.length-1;
        while (end > start) {
            if (S[end] === S[start]) {
                
            }
        }
         // for (let i = S.length-1; i >= start; i--) {
        //     if (S[end] === S[start]) {
        //         console.log(S.slice(start, i+1))
        //         ans.push(i-start)
        //         start = i;
        //     }
        // }
    }
    return ans;
};

console.log(partitionLabels("ababcbacadefegdehijhklij"))