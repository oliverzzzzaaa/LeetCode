var merge = function(intervals) {
    if (intervals.length < 1) {return []}
    let sorted = intervals.sort((a,b) => a[0] - b[0])  
    let ans = [];
    let lowerbound = sorted[0][0]
    let upperbound = sorted[0][1]
    for (let i = 0; i < sorted.length; i++) {
        let interval = sorted[i];
        if (interval[0] > upperbound) {
            ans.push([lowerbound, upperbound]);
            lowerbound = interval[0]
            upperbound = interval[1]
        } else if (interval[1] > upperbound) {
            upperbound = interval[1];
        }
    }
    ans.push([lowerbound, upperbound])
    return ans
};

console.log(merge([[1,3],[8,10],[2,6],[15,18]]))