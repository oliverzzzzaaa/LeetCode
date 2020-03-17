var letterCombinations = function(digits) {
    let dict = {
        2: 'abc',
        3: 'def',
        4: 'ghi',
        5: 'jkl',
        6: "mno",
        7: 'pqrs',
        8: 'tuv',
        9: 'wxyz'
    }
    if (digits.length < 1) {return []}
    return dp(digits, dict, "")
};

function dp(digits, dict, str) {
    if (digits.length < 1) {return str}
    let nextdigit = digits[0];
    let possibles = dict[nextdigit];
    let newarr = [];
    for (let i = 0; i < possibles.length; i++) {
        newarr = newarr.concat(dp(digits.slice(1), dict, str.concat(possibles[i])))
    }
    return newarr;
} 
console.log(letterCombinations(""))