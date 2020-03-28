var maxDepth = function(root) {
    if (!root) {return 0}
    let localmax = 0;
    if (root.children) {
        root.children.forEach(child => {
            localmax = Math.max(localmax, maxDepth(child));
        })
    } else {
        return 0
    }
    return 1 + localmax;
};