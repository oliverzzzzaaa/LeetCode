var oddCells = function(n, m, indices) {
    let row = {};
    let col = {};
    let count = 0;
    indices.forEach(pair => {
        if (!row[pair[0]]) {
            row[pair[0]] = 1;
        } else {
            row[pair[0]]++;
        }
        if (!col[pair[1]]) {
            col[pair[1]] = 1;
        } else {
            col[pair[1]]++;
        }
    })
    console.log(row)
    console.log(col)
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            let sum = 0
            if (row[i]) {sum+=row[i]}
            if (col[j]) {sum+= col[j]}
            if (sum % 2 !== 0) {count++}
        }
    }
    return count
};

console.log(oddCells(48, 37, [[40,5]]))