var isCousins = function(root, x, y) {
    let h = {};
    let queue = [root];
    let nextqueue = [];
    let node;
    let level = 1;
    while (queue.length > 0 && (!h[x] && !h[y])) {
        for (let i = 0; i < queue.length; i++) {
            node = queue[i];
            if (node.val === x) {
                h[x] = level;
            } else if (node.val === y) {
                h[y] = level;
            } 
            if (node.right) {nextqueue.push(node.right)}
            if (node.left) {nextqueue.push(node.left)}
        }
        queue = nextqueue;
        nextqueue = [];
        level++;
    }
    console.log(h[x], h[y]);
    return (h[x] === h[y] && );
};