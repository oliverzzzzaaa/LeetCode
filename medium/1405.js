var longestDiverseString = function(a, b, c) {
    let h = {
        'a': a,
        'b': b,
        'c': c
    }
    let longestString = ''
    // Increment temp again after coming out of DP call
    function dp(str, h) {
        if (str.length > longestString.length) {
            longestString = str
        }
        if (Object.values(h).some(val => val > 0)) {
            // console.log(str)
            if (h['a'] > 0 && !(str[str.length-1] === 'a' && str[str.length-2] === 'a')) {
                h['a'] = h['a']-1
                dp(str.concat('a'), h)
                h['a'] = h['a']+1
            }
            if (h['b'] > 0 && !(str[str.length-1] === 'b' && str[str.length-2] === 'b')) {
                let temp = Object.assign({}, h);
                temp['b'] = h['b']-1
                dp(str.concat('b'), temp)
                h['b'] = h['b']+1
                
            }
            if (h['c'] > 0 && !(str[str.length-1] === 'c' && str[str.length-2] === 'c')) {
                let temp = Object.assign({}, h);
                temp['c'] = h['c']-1
                dp(str.concat('c'), temp)
                h['c'] = h['c']+1
            }
        } 
    }
    dp('', h)
    return longestString
};
// var longestDiverseString = function(a, b, c) {
//     let h = {
//         'a': a,
//         'b': b,
//         'c': c
//     }
//     let longestString = ''
//     // Increment temp again after coming out of DP call
//     function dp(str, h) {
//         if (str.length > longestString.length) {
//             longestString = str
//         }
//         if (Object.values(h).some(val => val > 0)) {
//             // console.log(str)
//             if (h['a'] > 0 && !(str[str.length-1] === 'a' && str[str.length-2] === 'a')) {
//                 let temp = Object.assign({}, h);
//                 temp['a'] = h['a']-1
//                 dp(str.concat('a'), temp)
//             }
//             if (h['b'] > 0 && !(str[str.length-1] === 'b' && str[str.length-2] === 'b')) {
//                 let temp = Object.assign({}, h);
//                 temp['b'] = h['b']-1
//                 dp(str.concat('b'), temp)
                
//             }
//             if (h['c'] > 0 && !(str[str.length-1] === 'c' && str[str.length-2] === 'c')) {
//                 let temp = Object.assign({}, h);
//                 temp['c'] = h['c']-1
//                 dp(str.concat('c'), temp)
//             }
//         } 
//     }
//     dp('', h)
//     return longestString
// };

console.log(longestDiverseString(1,1,7))
