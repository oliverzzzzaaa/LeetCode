import {mergeSort} from '../mergesort.mjs'

var kClosest = function(points, K) {
    const getDist = point => (point[0] ** 2) + (point[1] ** 2);
    return points.sort((a, b) => getDist(a) - getDist(b)).slice(0, K);
};
// console.log(kClosest([[3,3],[5,-1],[-2,4]], 2))
console.log(kClosest([[1,0],[0,1]], 2))

