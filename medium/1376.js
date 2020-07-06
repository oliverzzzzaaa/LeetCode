var numOfMinutes = function(n, headID, manager, informTime) {
    let totaltime = 0;
    let set = new Set();
    for (let i = 0; i < manager.length; i++) {
        let man = manager[i]
        if (man === -1) continue;
        if (!set.has(man)) {
            set.add(man)
            totaltime+=informTime[man]
        }
    }
    return totaltime;
};

console.log(numOfMinutes(15,0,[-1,0,0,1,1,2,2,3,3,4,4,5,5,6,6], [1,1,1,1,1,1,1,0,0,0,0,0,0,0,0]))
