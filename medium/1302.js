var deepestLeavesSum = function(root) {
    let queue = [root];
    let sum = 0;
    while (queue.length > 0) {
        let node = queue.shift();
        if (node.left) {
            queue.push(node.left)
        }
        if (node.right) {
            queue.push(node.right)
        }
        if (node.left === null && node.right === null) {
            sum+=node.val
        }
        console.log(sum)
    }
    return sum;
};