// var customSortString = function(S, T) {
//     let h = {};
//     let h2 = {};
//     for (let i = 0; i < S.length; i++) {
//         let char = S[i];
//         h[char] = i;
//     }
//     for (let i = 0; i < T.length; i++) {
//         let char = T[i];
//         if (!h2[char]) {
//             h2[char] = 1;
//         } else {
//             h2[char]++;
//         }
//     }

// };

var customSortString = function(S, T) {
    let h2 = {};
    for (let i = 0; i < T.length; i++) {
        let char = T[i];
        if (!h2[char]) {
            h2[char] = 1;
        } else {
            h2[char]++;
        }
    }
    let newString = "";
    for (let i = 0; i < S.length; i++) {
        let char = S[i];
        for (let j = 0; j < h2[char]; j++) {
            newString = newString + char
        }
        h2[char] = 0;
    }
    Object.keys(h2).forEach(key => {
        if (h2[key] > 0) {
            for (let j = 0; j < h2[key]; j++) {
                newString = newString + key
            }
        }
    })
    return newString
};

console.log(customSortString('cba', 'abcd'))