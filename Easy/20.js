var isValid = function(s) {
    let h = {};
    h["("] = 0
    h["{"] = 0
    h["["] = 0
    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        switch (char) {
            case "(":
                h["("]++;
                break;
            case "{":
                h["{"]++;
                break;
            case "[":
                h["["]++;
                break;
            case ")":
                if (h["("] < 1) {return false}
                h["("]--;
                break;
            case "}":
                if (h["}"] < 1) {return false}
                h["{"]--;
                break;
            case "]":
                if (h["]"] < 1) {return false}
                h["["]--;
                break;
        }
    }
    return Object.values(h).every(val => val === 0)
};

console.log(isValid("(){}[]"))