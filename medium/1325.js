var removeLeafNodes = function(root, target) {
    if (root) {
        root.left = removeLeafNodes(root.left, target)
        root.right = removeLeafNodes(root.right, target)
        if (root.val === target && (!root.right && !root.left)) {
            return null;
        } else {
            return root;
        }
    }
    return null
};