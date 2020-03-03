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
                currSum = 0;
            }
            currLevel+=1;
            queue = levelqueue;
            levelqueue = [];
        } else {
            let root = queue.shift();
            currSum += root.val
            if (root.right) {levelqueue.push(root.right)}
            if (root.left) {levelqueue.push(root.left)}
        }
    }
    return maxLevel;
};