var sumNumbers = function(root) {
    if (!root) {return 0}
    if (!root.left && !root.right) {
        return root.val
    } else if (root.left && root.right) {
        return sumLeaf(root.left, "".concat(root.val)) + sumLeaf(root.right, "".concat(root.val)) 
    } else if (root.left) {
        return sumLeaf(root.left, "".concat(root.val))
    } else {
        return sumLeaf(root.right, "".concat(root.val)) 
    }
};
function sumLeaf(node, str) {
    if (!node.left && !node.right) {
        return parseInt(str.concat(node.val));
    } else if (node.left && node.right) {
        return sumLeaf(node.left, str.concat(node.val)) + sumLeaf(node.right, str.concat(node.val)) 
    } else if (node.left) {
        return sumLeaf(node.left, str.concat(node.val))
    }else {
        return sumLeaf(node.right, str.concat(node.val)) 
    }
}