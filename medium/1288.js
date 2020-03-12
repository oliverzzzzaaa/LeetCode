

// var removeCoveredIntervals = function(intervals) {
//     let newidx = 0;
//     for (let i = 0; i < intervals.length; i++) {
//         let temp = intervals[i];
//         let covered = false;
//         for (let j = i+1; j < intervals.length; j++) {
//             let temp2 = intervals[j];
//             if ((temp[0] >=  temp2[0] && temp[1] <= temp2[1]) && j !== i) {
//                 covered = true;
//             }
//         }
//         if (!covered) {
//             intervals[newidx] = temp;
//             newidx++;
//         }
//     }
//     // return intervals.slice(0, newidx)
//     return newidx
// };

// console.log(removeCoveredIntervals([[1,4],[3,6],[2,8]]))
// console.log(removeCoveredIntervals([[1,4],[2,3]]))
console.log(removeCoveredIntervals([[34335,39239],[15875,91969],[29673,66453],[53548,69161],[40618,93111]]))