var findMinArrowShots = function(points) {
    if (points.length < 1) return 0
    let sortedpoints = points.sort((a, b) => {
        if (a[0] > b[0]) return 1
        if (a[0] < b[0]) return -1
        if (a[1] > b[1]) return 1;
        if (a[1] <= b[1]) return -1
    });
    let start = sortedpoints[0];
    let i = 1;
    let count = 1;
    // console.log(points[i])
    // console.log(isOverlap(start,points[i]))
    while (i < points.length) {
        while(i < points.length && isOverlap(start, sortedpoints[i])) {
            start[0] = Math.max(start[0], sortedpoints[i][0]);
            start[1] = Math.min(start[1], sortedpoints[i][1]);
            i++;
        }
        if(i < points.length){
            count++;
            start = sortedpoints[i];
            i++;    
        }
    }
    return count;
};

function isOverlap(start, point) {
    return (point[0] <= start[1]);
}

console.log(findMinArrowShots([[9,12],[1,10],[4,11],[8,12],[3,9],[6,9],[6,7]]))