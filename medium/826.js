var maxProfitAssignment = function(difficulty, profit, worker) {
    let h = {};
    let j = {};
    let sum = 0;
    for (let i = 0; i < difficulty.length; i++) {
        h[profit[i]] = difficulty[i];
    }
    let sortedProfits = profit.sort((a, b) => b-a)
    // let sortedworker = worker.sort((a, b) => a-b);
    worker.forEach(worker => {
        let i = sortedProfits.length-1;
        while (sortedprofits[i] > worker) {i--}
        sum += 
    })
    console.log(sortedProfits)
    return sum
};

console.log(maxProfitAssignment([68,35,52,47,86], [67,17,1,81,3], [92,10,85,84,82]))

//[35, 47, 52, 68, 86]
//[17, 81, 1, 67, 3]

// [68,35,52,47,86]
// [67,17,1,81,3]
// [92,10,85,84,82]