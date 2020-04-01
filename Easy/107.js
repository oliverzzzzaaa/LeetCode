var levelOrderBottom = function(root) {
    let reversed = [];
    let curr = [];
    let next = [];
    let queue = [root];
    let node;
    while (queue.length > 0) {
        for (let i = 0; i < queue.length; i++) {
            node = queue[i];
            if (node.right) {next.push(node.right)}
            if (node.left) {next.push(node.left)}
        }
        next.forEach(node => {
        })
        curr.push(next);
        queue = next;
        next = [];
    }
    for (let i = curr.length-1; i >= 0; i--) {
        reversed.push(curr[i])
    }
    return reversed
};