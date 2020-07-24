function reverseInParentheses(inputString) {
    if (inputString.length < 1) return "";
    let level = 0;
    let newstring = "";
    let lookup = new Array(inputString.length);
    lookup.fill("")
    for (let i = 0; i < inputString.length; i++) {
        let char = inputString[i];
        if (char !== "(" && char !== ")") {
            lookup[level] = lookup[level].concat(char);
        } else if (char === "(") {
            level+=1;
            // i+=1;
            // char = inputString[i];
            // lookup[level] = lookup[level].concat(char)
        } else {
            // i+=1;
            lookup[level-1] = lookup[level-1].concat(reverse(lookup[level]))
            level-=1;
            lookup[level+1] = "";
        }
    }
    // console.log(lookup)
    return lookup[0];
}

function reverse(str) {
    let newstr = ""
    for (let i = str.length-1; i >= 0; i--) {
        newstr = newstr.concat(str[i]);
    }
    return newstr;
}

// console.log(reverseInParentheses("(bar)"))
console.log(reverseInParentheses("foo(bar(baz))blim"))