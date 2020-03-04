var inorderTraversal = function(root) {
    let queue = [root];
    let output = [];
    let curr = [];
    if (root === null) {return []};
    while (queue.length > 0 || curr.length > 0) {
        if (queue.length > 0) {
            let node = queue.shift();
            if (!node.left) {
                output.push(node.val)
                if (node.right) {queue.unshift(node.right)}
            } else {
                curr.unshift(node)
                queue.unshift(node.left)
            }
        } else {
            let node = curr.shift();
            output.push(node.val)
            if (node.right) {queue.unshift(node.right)}
        }
    }
    return output
};