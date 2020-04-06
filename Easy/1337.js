var kWeakestRows = function(mat, k) {
    let h = {};
    // key = soldiers, value = index
    for (let i = 0; i < mat.length; i++) {
        let j = 0;
        let count = 0;
        while (mat[i][j] === 1) {
            count++;
            j++;
        }
        if (!h[count]) {
            h[count] = [i]
        } else {
            h[count].push(i)
        }
    }
    let ans = [];
    let sorted = Object.keys(h).sort((a,b) => a-b);
    let f = 0
    while (ans.length < k) {
        let rows = h[sorted[f]];
        for (let i = 0; i < rows.length; i++) {
            ans.push(rows[i])
            if (ans.length >= k) {break;}
        }
        f++;
    }
};