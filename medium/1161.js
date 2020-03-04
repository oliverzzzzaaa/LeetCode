var maxLevelSum = function(root) {
    let queue = [root];
    let levelqueue = [];
    let maxLevel = 1;
    let currLevel = 1;
    let maxSum = root.val;
    let currSum = 0;
    while (queue.length > 0 || levelqueue.length > 0) {
        if (queue.length === 0) {
            if (currSum > maxSum) {
                maxSum = currSum;
                maxLevel = currLevel;
            }
            currSum = 0;
            currLevel+=1;
            queue = levelqueue;
            levelqueue = [];
        } else {
            let node = queue.shift();
            currSum += node.val
            if (node.right !== null) {levelqueue.push(node.right)}
            if (node.left !== null) {levelqueue.push(node.left)}
        }
    }
    return maxLevel;
};