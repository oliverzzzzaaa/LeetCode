var maxPathSum = function(root) {
    let localmax = -Infinity

    function dfs(node) {
        if (!node) {return 0}
        let leftmax = Math.max(0, dfs(node.left))
        let rightmax = Math.max(0, dfs(node.right))
        localmax = Math.max(localmax, leftmax + rightmax + node.val)
        return Math.max(leftmax, rightmax) + node.val
    }
    dfs(root)
    return localmax
};