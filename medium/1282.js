var groupThePeople = function(groupSizes) {
    
    let h = {};
    for (let i = 0; i < groupSizes.length; i++) {
        let size = groupSizes[i];
        if (!h[size]) {
            h[size] = [i]
        } else {
            h[size].push(i)
        }
    }
    let retArray = [];
    Object.keys(h).forEach(key => {
        let num = parseInt(key);
        while (h[key].length > 0) {
            let sub = [];
            for (let i = 0; i < num; i++) {
                sub.push(h[key].shift())
            }
            retArray.push(sub)
        }
    })
    return retArray;
};

console.log(groupThePeople([3,3,3,3,3,1,3]))