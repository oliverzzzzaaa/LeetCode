var bstToGst = function(root) {
    let count = 0;
    function dfs(node) {
        if (!node) {return}
        if (node.right) {
            dfs(node.right)
        }
        count+= node.val
        node.val = count;
        if (node.left) {dfs(node.left)}
    }
    dfs(root);
    return root
};