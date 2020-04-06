var postorder = function(root) {
    let ans = [];
    function dfs(node) {
        if (!node) {return}
        if (node.children) {
            for (let i = 0; i < node.children.length; i++) {
                dfs(node.children[i])
            }
        }
        ans.push(node.val)
    }
    dfs(root);
    return ans
};

var postorder = function(root) {
    if (!root) {return []}
    let stack = [root];
    let ans = [];
    let checked = new Set();
    while (stack.length > 0) {
        let node = stack[stack.length-1];
        if (!checked.has(node) && node.children) {
            checked.add(node)
            for (let i = node.children.length-1; i >= 0; i--) {
                stack.push(node.children[i]);
            }
        } else {
            ans.push(node.val);
            stack.pop();
        }
    }
    return ans
}