// var wordBreak = function(s, wordDict) {
//     let newDict = {};
//     wordDict.forEach(word => {
//         newDict[word] = true;
//     })
//     let works = false;
//     for (let i = s.length; i >= 0; i--) {
//         if (isWord(s.slice(0, i), newDict)) {
//             if (s.slice(i).length < 1 || betterWordBreak(s.slice(i), newDict)) {
//                 works = true
//             }
//         }
//     }
//     return works

// };

// const betterWordBreak = function(s, newDict) {
//     let works = false;
//     for (let i = 0; i <= s.length; i++) {
//         if (isWord(s.slice(0, i), newDict)){
//             if (s.slice(i).length < 1 || betterWordBreak(s.slice(i), newDict)) {
//                 works = true;
//             }
//         }
//     }
//     return works
// }

// const isWord = function(string, newDict) {
//     // console.log(newDict)
//     if (newDict[string]) {
//         return true;
//     } else {
//         return false;
//     }
// }

// var wordBreak = function(s, wordDict) {
//     let h = {};
//     let dict = {};
//     wordDict.forEach(word => {
//         dict[word] = true;
//     })
//     if (s.length < 1) {return false}
//     return dp(s, dict, h)
// };

// function dp(s, wordDict, h) {
//     let ret = false;
//     if (s.length < 1) {return true}
//     if (h[s]) {return h[s]}
//     for (let i = s.length-1; i >= 0; i--) {
//         if (wordDict[s.slice(0,i+1)]) {
//             if (dp(s.slice(i+1), wordDict, h)) {
//                 ret = true;
//             }
//         }
//     }
//     return ret;
// }

// var wordBreak = function(s, wordDict) {
//     var t = [];                                                                                     
                                                                                                    
//     for (var i = 0; i< s.length; i++) {                                                             
//         for (var j = 0; j <=i; j ++ ) {                                                             
//             var word = s.slice(j, i + 1);                                                           
//             if (wordDict.has(word) && (j == 0 || t[j-1] == true )) { 
//                 console.log(word)                               
//                 t[i] = true;                                                                        
//             }                                                                                       
//         }                                                                                           
//     }                                                                                               
                                                                                                                                    
//     return t[s.length - 1] || false; 
// };


var wordBreak = function(s, wordDict) {
    let lookup = [];
    for (let i = 0; i < s.length; i++) {
        for (let j = 0; j < i; j++) {
            let word = s.slice(j, i+1);
            if (wordDict.has(word) && (lookup[j-1] || j === 0)) {
                lookup[i] = true;
            }
        }
    }
    return lookup[s.length-1] || false;
}


// console.log(wordBreak("leetcode", ["leet","code"]))
// console.log(betterWordBreak("code", {'leet': true, 'code': true}))
// console.log(isWord('code', {'leet': true, 'code': true}))
let wordDict = new Set();
wordDict.add('le')
wordDict.add('leet')
wordDict.add('codes')
wordDict.add('leetcode')

console.log(wordBreak("leetcode",
wordDict))