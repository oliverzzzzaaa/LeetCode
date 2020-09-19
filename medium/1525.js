// var numSplits = function(s) {
//     let left = new Set();
//     let all = {};
//     let arr = [];
//     let count = 0;
//     let uniq = 0;
//     for (let i = 0; i < s.length; i++) {
//         let char = s[i];
//         if (!all[char]) {
//             all[char] = 0;
//             uniq++;
//         }
//         arr.push(uniq)
//         all[char]++;
//     }
//     let right = [];
//     for (let i = s.length-1; i >= 0; i--) {
//         let char = s[i];
//         left.add(char)
//         right[i] = left.size
//     }
//     right[0] = left.size
//     // console.log(arr)
//     // for (let i = 0; i < right.length; i++) {
//     //     // console.log(arr[i], right[i])
//     //     if (right[i] === arr[i]) {
//     //         count++;
//     //     }
//     // }
//     for (let i = right.length-1; i > 0; i--) {
//         if (right[i] === arr[i-1]) {
//             count++;
//         }
//     }
//     // console.log(right, arr)
//     return count
// };

function numSplits(s) {
    let set = new Set();
    let left = [];
    let count = 0;
    let uniq = 0;
    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        
    }
}




console.log(numSplits("aacaba"))
// should be 2

console.log(numSplits("acbadbaada"))
// [1,2,3,3,4,4,4,4,4,4]
// [,2,1]

// Should be 2