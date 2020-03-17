function minTime(boxes) {
    // Write your code here
    return dp(boxes);
}

function dp(boxes) {
    if (boxes.length < 1) {return 0}
    let time = (boxes[0] * boxes.length) + boxes[0]
    for (let i = 1; i < boxes.length; i++) {
        if (boxes[i] <= boxes[0]) {
            time+=boxes[i];
            boxes[i] = 0;
        } else {
            time += boxes[0];
            boxes[i] = boxes[i] - boxes[0]
        }
    }
    return time + dp(boxes.slice(1))
}

console.log(minTime([3,2,1]))