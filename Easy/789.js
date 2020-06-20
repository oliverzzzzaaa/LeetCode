var escapeGhosts = function(ghosts, target) {
    let curr = [0,0];
    while ((curr[0] !== target[0] && curr[1] !== target[1]) ) {
        if (target[0] > curr[0]) {
            curr = [curr[0]+1, curr[1]];
        } else if (target[0] < curr[0]) {
            curr = [curr[0]-1, curr[1]]
        } else if (target[1] > curr[1]) {
            curr = [curr[0], curr[1]+1]
        } else {
            curr = [curr[0], curr[1]-1]
        }
        ghosts.forEach(ghost => {
            
        })
    }
 };