var reverseVowels = function(s) {
    let vowels = {
        'a': true,
        'e': true,
        'i': true,
        'o': true,
        'u': true,
        'A': true,
        'E': true,
        "I": true,
        "O": true,
        "U": true
    
    };
    let stringarr = s.split("")
    let arr = [];
    for (let i = 0; i < s.length; i++) {
        let char = s[i]
        if (vowels[char]) {
            arr.push(char)
        }
    }
    let count = 0
    for (let j = s.length-1; j>= 0; j--) {
        let char = s[j];
        if (vowels[char]) {
            stringarr[j] = arr[count];
            count++;
        }
    }
    return stringarr.join("")
};

console.log(reverseVowels('hello'))
