var deepestLeavesSum = function(root) {
    let queue = [root];
    let sum = root.val;
    let levelsum = 0;
    let nextqueue = [];
    while (queue.length > 0 || nextqueue.length > 0) {
        levelsum = 0;
        nextqueue = [];
        queue.forEach(node => {
            levelsum+= node.val;
            if (node.left) {nextqueue.push(node.left)}
            if (node.right) {nextqueue.push(node.right)}
        })
        if (queue.length > 0) {sum = levelsum}
        queue = Array.from(nextqueue)

    }
    return sum
};