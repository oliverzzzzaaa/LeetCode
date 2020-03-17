var pathSum = function(root, sum) {
    return rec(root, sum, 0, [])
};


function rec(node, sum, curr, path) {
    if (!node) {return null}
    if (!node.left && !node.right) {
        if (curr + node.val === sum) {
            return path.push(node)
        } else {
            return null;
        }
    } else {
        let left = rec(node.left, sum, curr+node.val, path.concat(node))
        let right = rec(node.right, sum, curr+node.val, path.concat(node))
        if (left && right) {
            return left.concat(right)
        } else if (left) {
            return left;
        } else {
            return right
        }
    }
}