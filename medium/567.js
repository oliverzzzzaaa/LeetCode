// var checkInclusion = function(s1, s2) {
//     let h = {};
//     for (let i = 0; i < s1.length; i++) {
//         let char = s1[i];
//         if (!h[char]) h[char] = 0;
//         h[char]++;
//     }
//     Object.freeze(h);

//     let res = false;
//     for (let i = 0; i < s2.length; i++) {
//         let char = s2[i];
//         if (h[char]) {
//             let newobj = Object.assign({}, h)
//             res = res || dfs(newobj, s2, i);
//         }
//         if (res === true) return true;
//     }
//     return false;
// };

// function dfs(h, s2, startidx) {
//     h[s2[startidx]]--;
//     startidx++;
//     while (h[s2[startidx]] > 0) {
//         h[s2[startidx]]--;
//         startidx++;
//     }
//     return Object.values(h).every(value => value === 0);
// }

function checkInclusion(s1, s2) {
    if (s1.length > s2.length) return false;
    let counts1 = new Array(26);
    counts1.fill(0);
    let counts2 = new Array(26);
    counts2.fill(0);
    for (let i = 0; i < s1.length; i++) {
        counts1[s1[i].charCodeAt(0) - 'a'.charCodeAt(0)]++;
        counts2[s2[i].charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }

    for (let i = s1.length; i < s2.length; i++) {
        counts2[s2[i].charCodeAt(0) - 'a'.charCodeAt(0)]++;
        console.log(counts2);
        counts2[s2[i-s1.length].charCodeAt(0) - 'a'.charCodeAt(0)]--;
    }
    console.log(counts2);
}

console.log(checkInclusion('ab', "eidboaoo"));