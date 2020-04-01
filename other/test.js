// function straightFlush(cards) {
//     const countSuites = {};
//     cards.forEach(card => {
//         if (!countSuites[card[1]]) countSuites[card[1]] = 0;
//         countSuites[card[1]] += 1;
//     });
//     let matchSuites = Object.values(countSuites).some(suites => suites >= 5);
//     let points = [];
//     cards.forEach(card => {
//         if (card[0] === 'A') {
//             points.push(14)
//             points.push(1)
//         }
//         else if (card[0] === 'J') { points.push(11) }
//         else if (card[0] === 'Q') { points.push(12) }
//         else if (card[0] === 'K') { points.push(13) }
//         else { points.push(card[0]) }
//     });
//     points = points.sort(function (a, b) { return a - b });
//     let flushCheck = false;
//     for (let i = 0; i < points.length - 5; i++) {
//         let arr = [];
//         // I goes from 0, 1
//         for (let j = 0; j < points.length - 1; j++) {
//             if (points[j] + 1 !== points[j + 1]) {
//                 break;
//             } else {
//                 arr.push(points[j])
//             };
//             if (arr.length === 5) flushCheck = true;
//         };
//     };
//     console.log(matchSuites, flushCheck)
//     return (matchSuites && flushCheck);
// };

// console.log(straightFlush([
//     [3,'C'],
//     [4,'C'],
//     [5,'C'],
//     [6,'C'],
//     [7,'C'],
//     [10,'C'],
//     [11,'C'],
// ]))