var minTimeToVisitAllPoints = function(points) {
    let time = 0;
    let curr = points.shift();
    while (points.length > 0) {
        let nextPoint = points.shift();
        while (nextPoint[0] !== curr[0] || nextPoint[1] !== curr[1]) {
            let move = calculateMove(curr, nextPoint)
            curr[0] += move[0];
            curr[1] += move[1];
            time++;
        }
    }
    return time
};

const calculateMove = function(start, end) {
    let move = [0,0]
    if (end[0] > start[0]) {
        move[0] = 1;
    } else if (end[0] < start[0]) {
        move[0] = -1;
    }
    if (end[1] > start[1]) {
        move[1] = 1;
    } else if (end[1] < start[1]) {
        move[1] = -1;
    }
    return move;
}

console.log(minTimeToVisitAllPoints([[1,1],[3,4],[-1,0]]))