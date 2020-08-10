var findFrequentTreeSum = function(root) {
    let h = {};
    if (!root) return []
    function dfs(node) {
        if (!node.left && !node.right) {
            val = node.val
        } else if (!node.left) {
            val = dfs(node.right) + node.val
        } else if (!node.right) {
            val = dfs(node.left) + node.val
        } else {
            val = dfs(node.left) + dfs(node.right) + node.val
        }
        if (!h[val]) h[val] = 0;
        h[val]++;
        return val
    }
    dfs(root);
    let maxOcc = 0;
    let maxVals = [];
    Object.keys(h).forEach(key => {
        if (h[key] > maxOcc) {
            maxOcc = h[key]
            maxVals = [key]
        } else if (h[key] === maxOcc) {
            maxVals.push(key)
        }
    })
    return maxVals
};