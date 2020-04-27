var longestPalindrome = function(s) {
    let maxlen = [0,0];
    for (let i = 0; i < s.length; i++) {
        let start = i-1;
        let end = i+1
        while ((start >= 0 && end < s.length) && (s[start] === s[end])) {
            if (end - start > maxlen[1] - maxlen[0]) {
                maxlen[0] = start;
                maxlen[1] = end;
            }
            start--;
            end++;
        } 
    }
    for (let i = 0; i < s.length; i++) {
        start = i;
        end = i+1;
        while ((start >= 0 && end < s.length) && (s[start] === s[end])) {
            if (end - start > maxlen[1] - maxlen[0]) {
                maxlen[0] = start;
                maxlen[1] = end;
            }
            start--;
            end++;
        }
    }
    return s.slice(maxlen[0], maxlen[1]+1)
};

// const longestPalindrome = function(s) {
//     if (s.length < 2) return s;

//     const lookup = [];
//     for(let i = 0; i < s.length; i++){
//         lookup[i] = new Array(s.length)
//     };
    
//     let maxLength = 1;
//     const ans = [0, 0]
//     for (let i = 0; i < s.length; i++) {
//         lookup[i][i] = true;
//     };

//     // basecase2
//     for (let i = 0; i < s.length - 1; i++) {
//         if (s[i] === s[i+1]){
//             lookup[i][i+1] = true;
//             if(maxLength < 2){
//                 maxLength = 2;
//                 ans[0] = i;
//                 ans[1] = i + 1;
//             };
//         };
//     }; 

//     // str that have 3 or more character
//     for(let i = 0; i < s.length - 2; i++){
//         for(let j = 2;  i + j < s.length; j++){ 
//             if(lookup[i+1][i + j - 1] === true && s[i] === s[i + j]){
//                 lookup[i][i + j] = true;
//                 if(j + 1 > maxLength){
//                     maxLength = j + 1;
//                     ans[0] = i;
//                     ans[1] = i + j;
//                 }
//             }else{
//                 lookup[i][i+j] = false;
//             };
//         };
//     };
//     return s.slice(ans[0], ans[1]+1);
// };

// console.log(isPalindrome("ana"))
console.log(longestPalindrome(""))