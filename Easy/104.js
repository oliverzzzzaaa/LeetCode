var maxDepth = function(root) {
    if (!root) {return 0}
    let level = 0;
    let queue = [root];
    let nextLevel = [];
    while (queue.length > 0) {
        for (let i = 0; i < queue.length; i++) {
            let ele = queue[i];
            if (ele.left) {nextLevel.push(ele.left)}
            if (ele.right) {nextLevel.push(ele.right)}
        }
        queue = nextLevel;
        nextLevel = [];
        level++;
    }
    return level;
}