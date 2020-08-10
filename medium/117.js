var connect = function(root) {
    let layer = [];
    let queue = [root];
    if (root === null || root.val === null) return root;
    while (queue.length > 0) {
        for (let i = 0; i < queue.length; i++) {
            let node = queue[i];
            if (node.left) layer.push(node.left);
            if (node.right) layer.push(node.right);
            if (queue[i+1]) {
                node.next = queue[i+1];
            } else {
                node.next = null;
            }
        }
        queue = layer;
        layer = [];
    }
    return root
};