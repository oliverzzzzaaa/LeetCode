var maxVowels = function(s, k) {
    let vowels = new Set();
    vowels.add("a");
    vowels.add("e");
    vowels.add("i");
    vowels.add("o");
    vowels.add("u");
    let start = s.slice(0,k);
    let count = 0;
    for (let i = 0; i < start.length; i++) {
        if (vowels.has(start[i])) {
            count++;
        }
    }
    let maxcount = count;
    let left = 0;
    let right = k;
    while (right < s.length) {
        if (vowels.has(s[left])) count--;
        if (vowels.has(s[right])) count++;
        if (count > maxcount) maxcount = count;
        right++;
        left++;
    }
    return maxcount;
};

console.log(maxVowels("leetcode", 3));