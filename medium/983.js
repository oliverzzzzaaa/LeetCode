var mincostTickets = function(days, costs) {
    let h = {};
    let alldays = [];
    let daysidx = 0
    for (let i = 0; i <= 365; i++) {
        if (days[daysidx] === i) {
            alldays[i] = true 
            daysidx++;
        } else {
            alldays[i] = false
        }
    }
    return dp(alldays, costs, h)
};

function dp(days, costs, h) {
    if (days.length < 1) {return 0}
    if (h[days.length]) {return h[days.length]}
    for (let i = 0; i < days.length; i++) {
        if (days[i]) {
            let one = costs[0] + dp(days.slice(i+1), costs, h)
            let seven = costs[1] + dp(days.slice(i+7), costs, h) || Number.MAX_VALUE
            let thirty = costs[2] + dp(days.slice(i+30), costs, h) || Number.MAX_VALUE
            h[days.length] = Math.min(one, seven, thirty)
            return h[days.length]
        }
    }
    return 0;
}

console.log(mincostTickets([1,4,6,7,8,20], [2,7,15]))
console.log(mincostTickets([1,4,6,7,8,365], [2,7,15]))