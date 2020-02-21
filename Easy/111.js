var minDepth = function(root) {
    let queue = [[root]];
    let depth = 1;
    let level;
    let nextLevel = [];
    if (root === null) {return 0}

    while (queue.length > 0) {
        nextLevel = [];
        level = queue.shift();
        while (level.length > 0) {
            let node = level.shift();
            if (node.left === null && node.right === null) {return depth}
            if (node.left !== null) {nextLevel.push(node.left)}
            if (node.right !== null) {nextLevel.push(node.right)}
        }
        queue.push(nextLevel);
        depth+=1;
    }
};