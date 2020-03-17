var findMaxForm = function(strs, m, n) {
    let h = {};
    let count = 0;
    let min = Math.min(m, n)
    strs.forEach(str => {
        if (str.length < min) {
            count++;
        } else {
            let counted = zeroones(str);
            if (m >= counted[0] && n >= counted[1]) {
                count++;
            }
        }
    })
    return count
};

function zeroones(str) {
    let ones = 0;
    let zeroes = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === '0') {zeroes+=1}
        if (str[i] === '1') {ones+=1}
    }
    return [zeroes, ones];
}

console.log(zeroones('111001'))