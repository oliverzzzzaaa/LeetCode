var sumEvenGrandparent = function(root) {
    let queue = [root];
    let evenNodes = [];
    let sum = 0;
    while (queue.length > 0) {
        let node = queue.shift();
        if (node.val % 2 === 0) {
            if (node.left && node.left.left) {evenNodes.push(node.left.left)}
            if (node.left && node.left.right) {evenNodes.push(node.left.right)}
            if (node.right && node.right.left) {evenNodes.push(node.right.left)}
            if (node.right && node.right.right) {evenNodes.push(node.right.right)}
        }
        if (node.left) {queue.push(node.left)}
        if (node.right) {queue.push(node.right)}
    }
    evenNodes.forEach(node => {
        sum+= node.val;
    })
    return sum
};