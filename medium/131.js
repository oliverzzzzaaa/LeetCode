var partition = function(s) {
    let ans = [];
    for (let i = 0; i < s.length; i++) {
        
    }
};

function dp(s, curr) {
    
}

function isPal(str) {
    if (str.length <1) {return false}
    if (str.length === 1) {return true}
    let start = 0
    let end = str.length-1;
    while (start < end){
        if (str[start] !== str[end]) {
            return false;
        }
        start++;
        end--;
    }
    return true;
}

console.log(('aab'))