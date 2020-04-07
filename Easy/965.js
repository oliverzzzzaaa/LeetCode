var isUnivalTree = function(root) {
    if (!root) {return false}
    let val = root.val;
    let queue = [root];
    for (let i = 0; i < queue.length; i++) {
        let node = queue[i]
        if (node.val !== val) {return false}
        if (node.left) {queue.push(node.left)}
        if (node.right) {queue.push(node.right)}
    }
    return true
};