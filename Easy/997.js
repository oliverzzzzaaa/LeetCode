var findJudge = function(N, trust) {
    let arr = new Array(N+1);
    arr.fill(0);
    let ans = -1;
    trust.forEach(comb => {
        arr[comb[0]] = -1;
        arr[comb[1]]++;
    })
    arr.forEach((person, i) => {
        if (person === N-1) ans = i;
    })
    console.log(arr)
    return ans;
};

// console.log(findJudge(3, [[1,3],[2,3],[3,1]]))
console.log(findJudge(2, [[1,2]]))