var levelOrderBottom = function(root) {
    if (!root) return [];
    let queue = [root];
    let res = [];
    let layer = [];
    let reslayer = [];
    while (queue.length > 0) {
        for (let i = 0; i < queue.length; i++) {
            let node = queue[i];
            reslayer.push(node.val);
            if (node.left) layer.push(node.left)
            if (node.right) layer.push(node.right)
        }
        queue = layer;
        layer = [];
        res.push(reslayer);
        reslayer = [];
    }  
    return res.reverse();
};