var rangeSumBST = function(root, L, R) {
    let queue = [root];
    let sum = 0;
    while (queue.length > 0) {
        let node = queue.shift();
        node.left ? queue.push(node.left) : null;
        node.right ? queue.push(node.right) : null;
        if (L <= node.val && node.val <= R) {
            sum+= node.val
        }
    }
    return sum
};