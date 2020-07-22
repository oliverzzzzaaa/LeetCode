var shiftingLetters = function(S, shifts) {
    let sum = 0;
    let newstring = [];
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    for (let i = shifts.length-1; i >= 0; i--) {
        sum += shifts[i];
        newstring.unshift(alphabet[(alphabet.indexOf(S[i]) + sum) % 26]);

    }
    return newstring.join("");
};

console.log(shiftingLetters('ruu', [26,9,17]));