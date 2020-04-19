var removeDuplicates = function(s, k) {
    
    function dfs(s) {
        if (s.length < 1) {return s}
        let i = 0;
        let count = 0;
        let lastchar;
        while (i < s.length) {
            if (s[i] !== lastchar) {
                lastchar = s[i];
                i++;
                count = 1;
            } else {
                count++;
                i++;
                if (count === k) {
                    return dfs(s.slice(0,i-count).concat(s.slice(i)))
                }
            }
        }
        return s
    }
    return dfs(s)
};

// var removeDuplicates = function(s, k) {
//     let i = 0;
//     let arr = new Array(s.length)
//     arr.fill(true);
//     let lastchar;
//     let count = 0;
//     while (i < s.length) {
//         if (arr[i] && s[i] === lastchar) {
//             count++;
//             if (count === k) {
//                 while (count > 0) {
//                     if (s[i] === undefined) {break;}
//                     if (s[i] === lastchar && arr[i]) {
//                         arr[i] = false;
//                         i--;
//                         count--;
//                     } else {
//                         i--;
//                     }
//                 }
//                 i = 0;
//                 lastchar = null;
//                 count = 0;
//             } else {
//                 i++;
//             }
//         } else if (arr[i] && s[i] !== lastchar){
//             lastchar = s[i];
//             count = 1;
//             i++;
//         } else {
//             i++;
//         }
//     }
//     let ans = [];
//     for (let x = 0; x < arr.length; x++) {
//         if (arr[x]) {
//             ans.push(s[x])
//         }
//     }
//     return ans.join("")
// }

console.log(removeDuplicates('deeedbbcccbdaa', 3))