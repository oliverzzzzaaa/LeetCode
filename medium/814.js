var pruneTree = function(root) {
    if (containsOne(root)) {
        return root
    } else {
        return null
    }
};

const containsOne = function(node) {
    if (node === null) {return false}
    let l1 = containsOne(node.left)
    let r1 = containsOne(node.right)
    if (!l1) {node.left = null}
    if (!r1) {node.right = null}
    return (node.val === 1 || l1 || r1)
}